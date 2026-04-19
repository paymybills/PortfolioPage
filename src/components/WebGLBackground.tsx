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
    renderer.toneMappingExposure = 1.4;

    const currentMount = mountRef.current;
    currentMount.appendChild(renderer.domElement);

    // === Cube environment map for polished metal reflections ===
    const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
    const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);
    // Fake environment: a few colored point lights to create reflection spots
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x050505);
    // Purple reflection spots
    const spotGeo = new THREE.SphereGeometry(2, 16, 16);
    const spot1Mat = new THREE.MeshBasicMaterial({ color: 0x9b7ae8 });
    const spot1 = new THREE.Mesh(spotGeo, spot1Mat);
    spot1.position.set(10, 8, -5);
    envScene.add(spot1);
    const spot2Mat = new THREE.MeshBasicMaterial({ color: 0xc4a8ff });
    const spot2 = new THREE.Mesh(spotGeo, spot2Mat);
    spot2.position.set(-8, 4, 8);
    envScene.add(spot2);
    const spot3Mat = new THREE.MeshBasicMaterial({ color: 0x6c3cdc });
    const spot3 = new THREE.Mesh(spotGeo, spot3Mat);
    spot3.position.set(0, -6, 12);
    envScene.add(spot3);
    const spot4Mat = new THREE.MeshBasicMaterial({ color: 0x2a1a4e });
    const spot4 = new THREE.Mesh(spotGeo, spot4Mat);
    spot4.position.set(-12, 10, -10);
    envScene.add(spot4);
    // White specular highlight spots for that chrome sheen
    const specGeo = new THREE.SphereGeometry(1.5, 16, 16);
    const spec1Mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const spec1 = new THREE.Mesh(specGeo, spec1Mat);
    spec1.position.set(5, 12, 3);
    envScene.add(spec1);
    const spec2Mat = new THREE.MeshBasicMaterial({ color: 0xddddff });
    const spec2 = new THREE.Mesh(specGeo, spec2Mat);
    spec2.position.set(-6, 8, -8);
    envScene.add(spec2);

    cubeCamera.position.set(0, 0, 0);
    cubeCamera.update(renderer, envScene);

    // === Lights — purple-tinted ===
    const keyLight = new THREE.DirectionalLight(0xc4a8ff, 3.0);
    keyLight.position.set(5, 10, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x6c3cdc, 1.8);
    rimLight.position.set(-8, 5, -5);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0x9b7ae8, 0.6);
    fillLight.position.set(0, -5, 10);
    scene.add(fillLight);

    // White top light for chrome specular streaks
    const topLight = new THREE.DirectionalLight(0xffffff, 1.2);
    topLight.position.set(0, 15, 0);
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x1a0a2e, 0.2);
    scene.add(ambientLight);

    // === Flowing ribbon geometry ===
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const segX = isMobile ? 120 : 200;
    const segY = isMobile ? 30 : 50;
    const ribbonWidth = 50;
    const ribbonDepth = 12;

    const geometry = new THREE.PlaneGeometry(
      ribbonWidth,
      ribbonDepth,
      segX,
      segY
    );
    geometry.rotateX(-Math.PI / 2.2);

    // Polished chrome/metal material with purple tint
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x1a0a2e,
      metalness: 1.0,
      roughness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      reflectivity: 1.0,
      envMap: cubeRenderTarget.texture,
      envMapIntensity: 2.0,
      side: THREE.DoubleSide,
    });

    const ribbon = new THREE.Mesh(geometry, material);
    ribbon.position.y = -1;
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
    let scrollVelocity = 0;
    let smoothVelocity = 0; // lerped for smooth transitions

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime() * 0.35;
      const delta = clock.getDelta();

      // Compute scroll velocity (px per frame → normalized)
      scrollVelocity = Math.abs(scrollY - lastScrollY);
      lastScrollY = scrollY;
      // Smooth lerp to avoid jarring jumps
      smoothVelocity += (scrollVelocity - smoothVelocity) * 0.08;

      // Amplitude multiplier: base 1.0, scales up to ~3.0 on fast scroll
      const amplitudeMultiplier = 1.0 + Math.min(smoothVelocity * 0.08, 2.0);

      // Flowing silk wave deformation with scroll-reactive amplitude
      for (let i = 0; i < posAttr.count; i++) {
        const orig = originalPositions[i];

        // Primary sine wave — big gentle undulation
        const wave1 = Math.sin(orig.x * 0.15 + time * 1.2) * 2.0;
        // Cross wave — adds organic twist
        const wave2 = Math.cos(orig.z * 0.4 + time * 0.7) * 1.2;
        // Fine detail ripple
        const wave3 =
          Math.sin((orig.x + orig.z) * 0.3 - time * 1.5) * 0.6;
        // Subtle high-freq shimmer for silk/metal effect
        const shimmer =
          Math.sin(orig.x * 0.8 + time * 3.0) *
          Math.cos(orig.z * 0.6 + time * 2.0) *
          0.15;

        const totalWave = (wave1 + wave2 + wave3 + shimmer) * amplitudeMultiplier;
        posAttr.setY(i, orig.y + totalWave);
      }
      posAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      // Parallax camera movement on scroll
      camera.position.y = 6 - scrollY * 0.003;
      camera.position.z = 18 - scrollY * 0.002;
      camera.lookAt(0, -scrollY * 0.001, 0);

      // Rotating lights for shifting specular highlights across the chrome
      keyLight.position.x = Math.sin(time * 0.4) * 12;
      keyLight.position.z = Math.cos(time * 0.4) * 12;

      rimLight.position.x = Math.cos(time * 0.3) * -10;
      rimLight.position.z = Math.sin(time * 0.3) * 8;

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
