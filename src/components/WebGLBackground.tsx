"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- THREE.JS LIQUID OBSIDIAN MANIFOLD ---
    const scene = new THREE.Scene();
    // Pitch black fog for depth fading
    scene.fog = new THREE.Fog(0x000000, 10, 50);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 5, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000);

    // Append canvas to component
    mountRef.current.appendChild(renderer.domElement);

    // Lights: High contrast for "Jaguar" luxury look
    const keyLight = new THREE.DirectionalLight(0xffffff, 2);
    keyLight.position.set(5, 10, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);

    // The Manifold Geometry (High polygon plane)
    const geometry = new THREE.PlaneGeometry(60, 60, 150, 150);
    geometry.rotateX(-Math.PI / 2);

    // Dark Chrome Material
    const material = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.position.y = -2;
    scene.add(plane);

    // Store original vertices for math operations
    const positionAttribute = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    const originalPositions: THREE.Vector3[] = [];
    for (let i = 0; i < positionAttribute.count; i++) {
        vertex.fromBufferAttribute(positionAttribute, i);
        originalPositions.push(vertex.clone());
    }

    // Animation Loop Variables
    const clock = new THREE.Clock();

    let scrollY = 0;
    const handleScroll = () => {
        scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    let animationId: number;
    let time = 0;

    function animateWebGL() {
      animationId = requestAnimationFrame(animateWebGL);
      time = clock.getElapsedTime() * 0.3;

      // Mathematical deformation of the plane
      for (let i = 0; i < positionAttribute.count; i++) {
        const orig = originalPositions[i];

        const zOffset =
          Math.sin(orig.x * 0.2 + time) * 1.5 +
          Math.cos(orig.z * 0.2 + time * 0.8) * 1.5 +
          Math.sin((orig.x + orig.z) * 0.1 - time) * 1.0;

        positionAttribute.setY(i, orig.y + zOffset);
      }
      positionAttribute.needsUpdate = true;
      geometry.computeVertexNormals();

      // Parallax camera movement
      camera.position.y = 5 - scrollY * 0.002;
      camera.position.z = 20 - scrollY * 0.001;
      camera.lookAt(0, 0, 0);

      keyLight.position.x = Math.sin(time * 0.5) * 10;
      keyLight.position.z = Math.cos(time * 0.5) * 10;

      renderer.render(scene, camera);
    }

    animateWebGL();

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
        if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
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
