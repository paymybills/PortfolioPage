"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x050505, 8, 45);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 6, 18);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050505);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const currentMount = mountRef.current;
    currentMount.appendChild(renderer.domElement);

    // === Cube environment map for liquid mercury reflections ===
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
    const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);
    
    // Fake environment to give the mercury something to reflect
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x020202); // Darker background to add contrast to silver

    // Create a series of bright, colorful celestial spheres to reflect off the mercury
    const spotGeo = new THREE.SphereGeometry(3, 32, 32);
    
    // Core purple lights
    const spot1 = new THREE.Mesh(spotGeo, new THREE.MeshBasicMaterial({ color: 0x9b7ae8 }));
    spot1.position.set(15, 10, -5);
    envScene.add(spot1);
    
    const spot2 = new THREE.Mesh(spotGeo, new THREE.MeshBasicMaterial({ color: 0xc4a8ff }));
    spot2.position.set(-12, 8, 10);
    envScene.add(spot2);
    
    const spot3 = new THREE.Mesh(spotGeo, new THREE.MeshBasicMaterial({ color: 0x6c3cdc }));
    spot3.position.set(0, -10, 15);
    envScene.add(spot3);

    // Bright white highlight lights for the mercury sheen
    const specGeo = new THREE.SphereGeometry(2, 32, 32);
    const spec1 = new THREE.Mesh(specGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    spec1.position.set(8, 15, 5);
    envScene.add(spec1);
    
    const spec2 = new THREE.Mesh(specGeo, new THREE.MeshBasicMaterial({ color: 0xeeeeff }));
    spec2.position.set(-10, 12, -10);
    envScene.add(spec2);

    cubeCamera.position.set(0, 0, 0);
    cubeCamera.update(renderer, envScene);

    // === Real scene lights ===
    // Use intensely colored directional lights to bathe the silver mercury in purple
    const keyLight = new THREE.DirectionalLight(0xc4a8ff, 4.0);
    keyLight.position.set(5, 10, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x6c3cdc, 2.5);
    rimLight.position.set(-8, 5, -5);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xb490ff, 1.5);
    fillLight.position.set(0, -5, 10);
    scene.add(fillLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.5);
    topLight.position.set(0, 15, 0);
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x2a1a4e, 0.5);
    scene.add(ambientLight);

    // === Flowing ribbon geometry ===
    // Increased resolution for a smoother, ultra-premium liquid effect
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const segX = isMobile ? 150 : 250;
    const segY = isMobile ? 40 : 60;
    const ribbonWidth = 60;
    const ribbonDepth = 15;

    const geometry = new THREE.PlaneGeometry(
      ribbonWidth,
      ribbonDepth,
      segX,
      segY
    );
    geometry.rotateX(-Math.PI / 2.2);

    // LIQUID MERCURY MATERIAL
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xe0e0e0, // Light silver base color
      metalness: 1.0, // Absolute metal
      roughness: 0.0, // Perfectly smooth
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      reflectivity: 1.0,
      envMap: cubeRenderTarget.texture,
      envMapIntensity: 2.5, // Strong reflections
      side: THREE.DoubleSide,
    });

    const ribbon = new THREE.Mesh(geometry, material);
    ribbon.position.y = -1.5;
    ribbon.position.z = -2;
    scene.add(ribbon);

    // Store original vertices
    const posAttr = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    const originalPositions: THREE.Vector3[] = [];
    for (let i = 0; i < posAttr.count; i++) {
      vertex.fromBufferAttribute(posAttr, i);
      originalPositions.push(vertex.clone());
    }

    const clock = new THREE.Clock();

    // === Scroll velocity tracking ===
    let scrollY = 0;
    let lastScrollY = 0;
    let smoothVelocity = 0; 
    let baseTime = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      
      const delta = clock.getDelta();
      // Use delta-time accumulation for smoother, frame-rate independent wave motion
      baseTime += delta * 0.45; 

      // Compute simple scroll velocity
      const scrollVelocity = Math.abs(scrollY - lastScrollY);
      lastScrollY = scrollY;
      
      // Extremely smooth lerp (5%) for buttery transition between fast/slow speeds
      smoothVelocity += (scrollVelocity - smoothVelocity) * 0.05;

      // Amplitude multiplier: base 1.0, scales up to ~2.5 organically
      const amplitudeMultiplier = 1.0 + Math.min(smoothVelocity * 0.04, 1.5);

      // Flowing liquid mercury deformation
      for (let i = 0; i < posAttr.count; i++) {
        const orig = originalPositions[i];

        // Deep fluid waves
        const wave1 = Math.sin(orig.x * 0.12 + baseTime * 1.5) * 1.8;
        const wave2 = Math.cos(orig.z * 0.25 + baseTime * 0.9) * 1.4;
        
        // Fluid displacement interactions
        const wave3 = Math.sin((orig.x + orig.z) * 0.2 - baseTime * 1.2) * 0.8;
        
        // Liquid surface tension micro-details
        const shimmer =
          Math.sin(orig.x * 0.6 + baseTime * 2.5) *
          Math.cos(orig.z * 0.5 + baseTime * 1.8) *
          0.2;

        const totalWave = (wave1 + wave2 + wave3 + shimmer) * amplitudeMultiplier;
        posAttr.setY(i, orig.y + totalWave);
      }
      
      posAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      // Gentle Parallax
      camera.position.y = 6 - scrollY * 0.002;
      camera.position.z = 18 - scrollY * 0.0015;
      camera.lookAt(0, -scrollY * 0.0005, 0);

      // Slower light rotation to catch the liquid reflections beautifully
      keyLight.position.x = Math.sin(baseTime * 0.5) * 15;
      keyLight.position.z = Math.cos(baseTime * 0.5) * 15;

      rimLight.position.x = Math.cos(baseTime * 0.4) * -12;
      rimLight.position.z = Math.sin(baseTime * 0.4) * 10;

      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-[100vw] h-[100vh] z-0 pointer-events-none"
    />
  );
}
