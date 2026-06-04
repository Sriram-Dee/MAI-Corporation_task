import React, { useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Plus, Send, Briefcase } from "lucide-react";
import gdprImg from "../assets/GDPR.png";
import logoImg from "../assets/Logo.webp";

const footerLinks = {
  COMPANY: [
    { name: "About Us", href: "#aboutus" },
    { name: "Careers", href: "#careers" },
    { name: "CSR", href: "#csr" },
    { name: "FAQ", href: "#faq" },
  ],
  PLATFORM: [
    { name: "Contact Us", href: "#contact-us" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "NDA", href: "#nda" },
  ],
};

const SocialIcons = [
  {
    label: "Facebook",
    bgColor: "bg-[#1877F2] hover:bg-[#1877F2]/90",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    bgColor: "bg-[#000000] hover:bg-[#111111]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    bgColor: "bg-[#FF0000] hover:bg-[#E60000]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
        <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    bgColor: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:brightness-110",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    bgColor: "bg-[#0A66C2] hover:bg-[#0A66C2]/90",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    bgColor: "bg-[#25D366] hover:bg-[#25D366]/90",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const drawElectricArc = (ctx, x1, y1, x2, y2, displace, color, width) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.moveTo(x1, y1);
  
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const steps = Math.max(4, Math.floor(dist / 8));
  
  let currX = x1;
  let currY = y1;
  
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    const tx = x1 + dx * t;
    const ty = y1 + dy * t;
    
    // Perpendicular electric jitter
    const pOffset = (Math.random() - 0.5) * displace;
    // Parallel electric jitter
    const lOffset = (Math.random() - 0.5) * (displace * 0.3);
    
    const nx = -dy / (dist || 1);
    const ny = dx / (dist || 1);
    
    currX = tx + nx * pOffset + (dx / (dist || 1)) * lOffset;
    currY = ty + ny * pOffset + (dy / (dist || 1)) * lOffset;
    
    ctx.lineTo(currX, currY);
  }
  ctx.lineTo(x2, y2);
  ctx.stroke();
};

function ElectricGridCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false, opacity: 0, lastMoved: 0 });
  const particlesRef = useRef([]);
  const lastSnapRef = useRef({ x: -1, y: -1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
      mouseRef.current.lastMoved = Date.now();
    };

    const handleMouseEnter = () => {
      mouseRef.current.active = true;
      mouseRef.current.lastMoved = Date.now();
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const parent = canvas.parentElement;
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);

    // Initialize tracking coordinates at the canvas center
    mouseRef.current.x = canvas.width / 2;
    mouseRef.current.y = canvas.height / 2;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const m = mouseRef.current;
      const timeSinceMove = Date.now() - m.lastMoved;
      let targetOpacity = 0;

      // Interpolate movement for smooth tracking
      if (m.active) {
        m.x += (m.targetX - m.x) * 0.1;
        m.y += (m.targetY - m.y) * 0.1;

        const delay = 600;      // Start decaying after 600ms of inactivity
        const duration = 1200;  // Duration of the fade-out phase
        if (timeSinceMove < delay) {
          targetOpacity = 1;
        } else {
          targetOpacity = Math.max(0, 1 - (timeSinceMove - delay) / duration);
        }
      } else {
        targetOpacity = 0;
      }

      m.opacity += (targetOpacity - m.opacity) * 0.06;

      // Draw subtle background grid
      const gridSpacing = 60;
      ctx.strokeStyle = "rgba(15, 117, 188, 0.1)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      if (m.opacity > 0.01) {
        const snapX = Math.round(m.x / gridSpacing) * gridSpacing;
        const snapY = Math.round(m.y / gridSpacing) * gridSpacing;

        // Trigger particles if snap intersection changes
        const lastSnap = lastSnapRef.current;
        if (snapX !== lastSnap.x || snapY !== lastSnap.y) {
          // Spawn particles shooting along the grid lines
          const speedVal = 2;
          const directions = [
            { vx: speedVal, vy: 0 },
            { vx: -speedVal, vy: 0 },
            { vx: 0, vy: speedVal },
            { vx: 0, vy: -speedVal }
          ];
          directions.forEach(d => {
            particlesRef.current.push({
              x: snapX,
              y: snapY,
              vx: d.vx,
              vy: d.vy,
              life: 1.0,
              decay: 0.015 + Math.random() * 0.01,
              lastIntersectionX: snapX,
              lastIntersectionY: snapY
            });
          });
          lastSnap.x = snapX;
          lastSnap.y = snapY;
        }

        // Active electric grid lines nearest to the cursor
        const flicker = 0.8 + Math.random() * 0.2;
        const mainOpacity = m.opacity * flicker;
        const maxRadius = 240; // Dynamic interaction bubble spanning multiple grid units

        const range = 4;
        const segments = [];
        const activeNodes = [];

        // Dynamically compute all visible grid segments and nodes in the cursor's field
        for (let i = -range; i <= range; i++) {
          for (let j = -range; j <= range; j++) {
            const nx = snapX + i * gridSpacing;
            const ny = snapY + j * gridSpacing;

            // Log active grid node
            const nodeDist = Math.sqrt((nx - m.x) ** 2 + (ny - m.y) ** 2);
            if (nodeDist < maxRadius - 40) {
              activeNodes.push({ x: nx, y: ny, dist: nodeDist });
            }

            // Horizontal segment connection
            const hMidX = nx + gridSpacing / 2;
            const hMidY = ny;
            const hDist = Math.sqrt((hMidX - m.x) ** 2 + (hMidY - m.y) ** 2);
            if (hDist < maxRadius) {
              const weight = (1.0 - hDist / maxRadius) ** 1.3;
              segments.push({
                x1: nx,
                y1: ny,
                x2: nx + gridSpacing,
                y2: ny,
                weight
              });
            }

            // Vertical segment connection
            const vMidX = nx;
            const vMidY = ny + gridSpacing / 2;
            const vDist = Math.sqrt((vMidX - m.x) ** 2 + (vMidY - m.y) ** 2);
            if (vDist < maxRadius) {
              const weight = (1.0 - vDist / maxRadius) ** 1.3;
              segments.push({
                x1: nx,
                y1: ny,
                x2: nx,
                y2: ny + gridSpacing,
                weight
              });
            }
          }
        }


        // Draw active connection paths
        segments.forEach(seg => {
          const opacity = seg.weight * mainOpacity;
          if (opacity <= 0.01) return;

          const softColor = `rgba(15, 117, 188, ${opacity * 0.22})`;
          const blueColor = `rgba(40, 160, 255, ${opacity * 0.95})`;
          const whiteColor = `rgba(255, 255, 255, ${opacity * 0.95})`;

          // Create a linear gradient to fade out the line segment endpoints
          const createGrad = (color) => {
            const grad = ctx.createLinearGradient(seg.x1, seg.y1, seg.x2, seg.y2);
            grad.addColorStop(0, "rgba(0,0,0,0)");
            grad.addColorStop(0.25, color);
            grad.addColorStop(0.75, color);
            grad.addColorStop(1, "rgba(0,0,0,0)");
            return grad;
          };

          const softGlowGrad = createGrad(softColor);
          const blueGrad = createGrad(blueColor);
          const whiteGrad = createGrad(whiteColor);

          // Soft glow background
          ctx.strokeStyle = softGlowGrad;
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
          ctx.stroke();

          // Glowing blue jagged electricity path
          drawElectricArc(ctx, seg.x1, seg.y1, seg.x2, seg.y2, 1.8, blueGrad, 1.35);

          // Bright white hot core path
          drawElectricArc(ctx, seg.x1, seg.y1, seg.x2, seg.y2, 0.8, whiteGrad, 0.75);
        });

        // Draw the decorative orbit nodes matching the reference design
        const drawDecorNode = (cx, cy, opacity, drawOrbit) => {
          // Center glowing dot
          ctx.beginPath();
          ctx.fillStyle = `rgba(100, 220, 255, ${opacity})`;
          ctx.arc(cx, cy, 3, 0, Math.PI * 2);
          ctx.fill();

          // Soft blue ring
          ctx.beginPath();
          ctx.strokeStyle = `rgba(15, 117, 188, ${opacity * 0.4})`;
          ctx.lineWidth = 1;
          ctx.arc(cx, cy, 6, 0, Math.PI * 2);
          ctx.stroke();

          if (drawOrbit) {
            // 4 satellite dots
            const satOffset = 7;
            const sats = [
              { x: cx, y: cy - satOffset },
              { x: cx, y: cy + satOffset },
              { x: cx - satOffset, y: cy },
              { x: cx + satOffset, y: cy }
            ];
            sats.forEach(sat => {
              ctx.beginPath();
              ctx.fillStyle = `rgba(100, 220, 255, ${opacity * 0.8})`;
              ctx.arc(sat.x, sat.y, 1.5, 0, Math.PI * 2);
              ctx.fill();
            });
          }
        };

        // Determine node closest to the cursor coordinates to draw the satellite details
        let closestNode = null;
        let minNodeDist = Infinity;
        activeNodes.forEach(node => {
          if (node.dist < minNodeDist) {
            minNodeDist = node.dist;
            closestNode = node;
          }
        });

        activeNodes.forEach(node => {
          const nodeOpacity = (1.0 - node.dist / (maxRadius - 40)) * mainOpacity;
          if (nodeOpacity <= 0.05) return;

          const isPrimary = (closestNode && node.x === closestNode.x && node.y === closestNode.y);
          drawDecorNode(node.x, node.y, nodeOpacity, isPrimary);
        });
      }

      // Draw and update particle sparks traveling along the grid
      const particles = particlesRef.current;
      const speedVal = 2;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Branching logic when crossing grid lines
        const onGridX = Math.round(p.x / gridSpacing) * gridSpacing;
        const onGridY = Math.round(p.y / gridSpacing) * gridSpacing;
        const distToGrid = Math.sqrt((p.x - onGridX) ** 2 + (p.y - onGridY) ** 2);

        if (distToGrid < 0.1 && (onGridX !== p.lastIntersectionX || onGridY !== p.lastIntersectionY)) {
          p.lastIntersectionX = onGridX;
          p.lastIntersectionY = onGridY;

          // 35% chance to turn at a grid intersection
          if (Math.random() < 0.35) {
            if (p.vx !== 0) {
              p.vy = Math.random() > 0.5 ? speedVal : -speedVal;
              p.vx = 0;
            } else {
              p.vx = Math.random() > 0.5 ? speedVal : -speedVal;
              p.vy = 0;
            }
          }
        }

        // Draw spark particle with motion blur tail
        ctx.beginPath();
        ctx.strokeStyle = `rgba(100, 220, 255, ${p.life * m.opacity})`;
        ctx.lineWidth = 2.0;
        ctx.moveTo(p.x - p.vx * 3.5, p.y - p.vy * 3.5);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        // Particle glow
        ctx.fillStyle = `rgba(15, 117, 188, ${p.life * 0.3 * m.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

const GDPRBadge = () => (
  <div className="pt-4">
    <img
      src={gdprImg}
      alt="GDPR Compliant"
      className="w-20 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
    />
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#010912] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Interactive Electric Canvas */}
      <ElectricGridCanvas />

      {/* Top CTA Banner */}
      <div className="relative z-10 border-b border-white/10 py-16 sm:py-20 backdrop-blur-[2px]">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-[#0F75BC] text-lg font-bold uppercase tracking-widest block mb-3">
                START TODAY — IT'S FREE
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 font-montserrat">
                Let's <span className="text-[#0F75BC] bg-gradient-to-r from-[#0F75BC] to-[#51B5FF] bg-clip-text text-transparent">Build</span>
                <br />
                Our Nation Great.
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mt-2 font-medium">
                Connect with verified UK tradespeople or find your next project. MAI brings the right people together.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row flex-wrap items-center gap-4 shrink-0 mt-4 lg:mt-0">
              <a
                href="#post-project"
                className="min-w-[200px] group inline-flex items-center justify-center gap-2 bg-[#0F75BC] hover:bg-[#0F75BC]/90 text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_24px_rgba(15,117,188,0.3)] hover:scale-[1.03] active:scale-[0.98]"
              >
                Post a Project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
              <a
                href="#learn-more"
                className="min-w-[200px] inline-flex items-center justify-center bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24 py-16 backdrop-blur-[2px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            <a href="#" className="inline-block hover:opacity-90 transition-opacity">
              <img
                src={logoImg}
                alt="MAI – We Build Homes"
                className="w-24 md:w-28 h-auto brightness-0 invert"
              />
            </a>
            <p className="text-[13px] text-white/50 leading-relaxed max-w-xs font-medium">
              A premier platform connecting homeowners with certified, skilled Traders across the UK.
            </p>
            {/* Colored Circular Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {SocialIcons.map(({ label, bgColor, svg }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm`}
                >
                  {svg}
                </a>
              ))}
            </div>
            {/* GDPR Badge */}
            <GDPRBadge />
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="pl-0 lg:pl-10">
              <h3 className="text-lg font-black uppercase tracking-widest text-white/40 mb-6">
                {heading}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[13.5px] text-white/60 hover:text-white transition-colors duration-200 font-semibold"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="pl-0 lg:pl-4">
            <h3 className="text-lg font-black uppercase tracking-widest text-white/40 mb-6">
              CONTACT
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3.5 text-[13.5px] text-white/60 font-medium">
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#0F75BC]" />
                </div>
                <span className="leading-relaxed">
                  1 De La Warr Way, Cambourne,<br />Cambridge CB23 6DX
                </span>
              </li>
              <li>
                <a
                  href="tel:+442080043345"
                  className="flex items-center gap-3.5 text-[13.5px] text-white/60 hover:text-white transition-colors font-medium"
                >
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#0F75BC]" />
                  </div>
                  +44 208 004 3345
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@myproject.ai"
                  className="flex items-center gap-3.5 text-[13.5px] text-white/60 hover:text-white transition-colors font-medium"
                >
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#0F75BC]" />
                  </div>
                  info@myproject.ai
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24 py-8">
          <p className="text-xs text-white/30 font-medium text-center leading-relaxed max-w-4xl mx-auto">
            © 2023 - 2026 MAI Corporation Ltd. MAI Corporation Ltd is a UK-based holding company overseeing subsidiaries and affiliated operations across the UK, EU, Asia and Africa. Incorporated in England & Wales under Company No. 15469340. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
