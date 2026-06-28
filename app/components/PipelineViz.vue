<template>
  <div class="relative w-full overflow-hidden">
    <!-- Ambient radial glow -->
    <div class="pipeline-glow absolute inset-0 pointer-events-none" />

    <svg
      viewBox="0 0 560 310"
      class="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Background dot pattern -->
        <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="#3D5268" opacity="0.07" />
        </pattern>

        <!-- Card shadow for nodes -->
        <filter id="cs" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="5" flood-color="#3D5268" flood-opacity="0.1" />
        </filter>

        <!-- Active node shadow (gold tint) -->
        <filter id="as" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#F5C120" flood-opacity="0.25" />
        </filter>

        <!-- Dot / packet glow -->
        <filter id="dg" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <!-- Arrow head -->
        <marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 1 L 7 4 L 0 7 z" fill="#3D5268" opacity="0.5" />
        </marker>

        <!-- Paths for animateMotion (hidden, used by mpath) -->
        <path id="e1" d="M 120 155 C 160 155 160 75 170 75" fill="none" />
        <path id="e2" d="M 120 155 C 160 155 160 235 170 235" fill="none" />
        <path id="e3" d="M 260 75 C 300 75 300 155 310 155" fill="none" />
        <path id="e4" d="M 260 235 C 300 235 300 155 310 155" fill="none" />
        <path id="e5" d="M 400 155 C 440 155 440 75 450 75" fill="none" />
        <path id="e6" d="M 400 155 C 440 155 440 235 450 235" fill="none" />
      </defs>

      <!-- Background dots -->
      <rect width="560" height="310" fill="url(#dots)" />

      <!-- ── Edges: ghost layer (very dim) ── -->
      <g fill="none" stroke="#3D5268" stroke-width="1.5" opacity="0.15" stroke-linecap="round">
        <path d="M 120 155 C 160 155 160 75 170 75" />
        <path d="M 120 155 C 160 155 160 235 170 235" />
        <path d="M 260 75 C 300 75 300 155 310 155" />
        <path d="M 260 235 C 300 235 300 155 310 155" />
        <path d="M 400 155 C 440 155 440 75 450 75" />
        <path d="M 400 155 C 440 155 440 235 450 235" />
      </g>

      <!-- ── Edges: animated marching dashes ── -->
      <g fill="none" stroke="#3D5268" stroke-width="1.5" stroke-linecap="round" opacity="0.4">
        <path class="ef" style="animation-delay:0s"     d="M 120 155 C 160 155 160 75 170 75"    marker-end="url(#arrow)" />
        <path class="ef" style="animation-delay:-0.9s"  d="M 120 155 C 160 155 160 235 170 235"  marker-end="url(#arrow)" />
        <path class="ef" style="animation-delay:-0.4s"  d="M 260 75 C 300 75 300 155 310 155"    marker-end="url(#arrow)" />
        <path class="ef" style="animation-delay:-1.3s"  d="M 260 235 C 300 235 300 155 310 155"  marker-end="url(#arrow)" />
        <path class="ef" style="animation-delay:-0.7s"  d="M 400 155 C 440 155 440 75 450 75"    marker-end="url(#arrow)" />
        <path class="ef" style="animation-delay:-1.6s"  d="M 400 155 C 440 155 440 235 450 235"  marker-end="url(#arrow)" />
      </g>

      <!-- ── Data packets: wave 1 ── -->
      <circle r="4.5" fill="#F5C120" filter="url(#dg)" opacity="0.95">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="0s"><mpath href="#e1" /></animateMotion>
      </circle>
      <circle r="4.5" fill="#F5C120" filter="url(#dg)" opacity="0.95">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.5s"><mpath href="#e2" /></animateMotion>
      </circle>
      <circle r="4.5" fill="#F5C120" filter="url(#dg)" opacity="0.95">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.0s"><mpath href="#e3" /></animateMotion>
      </circle>
      <circle r="4.5" fill="#F5C120" filter="url(#dg)" opacity="0.95">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.5s"><mpath href="#e4" /></animateMotion>
      </circle>
      <circle r="4.5" fill="#F5C120" filter="url(#dg)" opacity="0.95">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.9s"><mpath href="#e5" /></animateMotion>
      </circle>
      <circle r="4.5" fill="#F5C120" filter="url(#dg)" opacity="0.95">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="2.3s"><mpath href="#e6" /></animateMotion>
      </circle>

      <!-- ── Data packets: wave 2 (smaller, offset) ── -->
      <circle r="3" fill="#F5C120" filter="url(#dg)" opacity="0.55">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="3.8s"><mpath href="#e1" /></animateMotion>
      </circle>
      <circle r="3" fill="#F5C120" filter="url(#dg)" opacity="0.55">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="4.3s"><mpath href="#e2" /></animateMotion>
      </circle>
      <circle r="3" fill="#F5C120" filter="url(#dg)" opacity="0.55">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="4.8s"><mpath href="#e3" /></animateMotion>
      </circle>
      <circle r="3" fill="#F5C120" filter="url(#dg)" opacity="0.55">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="5.3s"><mpath href="#e4" /></animateMotion>
      </circle>
      <circle r="3" fill="#F5C120" filter="url(#dg)" opacity="0.55">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="5.7s"><mpath href="#e5" /></animateMotion>
      </circle>
      <circle r="3" fill="#F5C120" filter="url(#dg)" opacity="0.55">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="6.1s"><mpath href="#e6" /></animateMotion>
      </circle>

      <!-- ══════════════════════════════════════
           NODES
           ══════════════════════════════════════ -->

      <!-- A · TRIGGER (active node — gold border + pulse ring) -->
      <g>
        <rect class="pulse-ring" x="22" y="127" width="106" height="56" rx="12" fill="none" stroke="#F5C120" stroke-width="1" />
        <rect x="30" y="133" width="90" height="44" rx="8" fill="#FFFFFF" stroke="#F5C120" stroke-width="2" filter="url(#as)" />
        <circle cx="48" cy="155" r="4" fill="#F5C120" opacity="0.9" class="blink" />
        <text x="75" y="150" text-anchor="middle" fill="#3D5268" font-size="8.5" font-family="'JetBrains Mono',monospace" letter-spacing="1.2" font-weight="700">TRIGGER</text>
        <text x="75" y="168" text-anchor="middle" fill="#7A90A3" font-size="8.5" font-family="'Inter',sans-serif">New Event</text>
      </g>

      <!-- B · AI PARSE -->
      <g>
        <rect x="170" y="53" width="90" height="44" rx="8" fill="#FFFFFF" stroke="#3D5268" stroke-width="1.2" stroke-opacity="0.35" filter="url(#cs)" />
        <text x="215" y="70" text-anchor="middle" fill="#3D5268" font-size="8" font-family="'JetBrains Mono',monospace" letter-spacing="1" font-weight="600">AI PARSE</text>
        <text x="215" y="87" text-anchor="middle" fill="#7A90A3" font-size="8.5" font-family="'Inter',sans-serif">Extract Data</text>
      </g>

      <!-- C · FILTER -->
      <g>
        <rect x="170" y="213" width="90" height="44" rx="8" fill="#FFFFFF" stroke="#3D5268" stroke-width="1.2" stroke-opacity="0.35" filter="url(#cs)" />
        <text x="215" y="230" text-anchor="middle" fill="#3D5268" font-size="8" font-family="'JetBrains Mono',monospace" letter-spacing="1" font-weight="600">FILTER</text>
        <text x="215" y="247" text-anchor="middle" fill="#7A90A3" font-size="8.5" font-family="'Inter',sans-serif">Conditions</text>
      </g>

      <!-- D · ROUTE (active node — gold border + pulse ring) -->
      <g>
        <rect class="pulse-ring" style="animation-delay: -1s" x="302" y="127" width="106" height="56" rx="12" fill="none" stroke="#F5C120" stroke-width="1" />
        <rect x="310" y="133" width="90" height="44" rx="8" fill="#FFFFFF" stroke="#F5C120" stroke-width="2" filter="url(#as)" />
        <circle cx="328" cy="155" r="4" fill="#F5C120" opacity="0.9" class="blink" style="animation-delay: -0.6s" />
        <text x="355" y="150" text-anchor="middle" fill="#3D5268" font-size="8.5" font-family="'JetBrains Mono',monospace" letter-spacing="1.2" font-weight="700">ROUTE</text>
        <text x="355" y="168" text-anchor="middle" fill="#7A90A3" font-size="8.5" font-family="'Inter',sans-serif">Decision</text>
      </g>

      <!-- E · UPDATE -->
      <g>
        <rect x="450" y="53" width="90" height="44" rx="8" fill="#FFFFFF" stroke="#3D5268" stroke-width="1.2" stroke-opacity="0.35" filter="url(#cs)" />
        <text x="495" y="70" text-anchor="middle" fill="#3D5268" font-size="8" font-family="'JetBrains Mono',monospace" letter-spacing="1" font-weight="600">UPDATE</text>
        <text x="495" y="87" text-anchor="middle" fill="#7A90A3" font-size="8.5" font-family="'Inter',sans-serif">CRM / DB</text>
      </g>

      <!-- F · NOTIFY -->
      <g>
        <rect x="450" y="213" width="90" height="44" rx="8" fill="#FFFFFF" stroke="#3D5268" stroke-width="1.2" stroke-opacity="0.35" filter="url(#cs)" />
        <text x="495" y="230" text-anchor="middle" fill="#3D5268" font-size="8" font-family="'JetBrains Mono',monospace" letter-spacing="1" font-weight="600">NOTIFY</text>
        <text x="495" y="247" text-anchor="middle" fill="#7A90A3" font-size="8.5" font-family="'Inter',sans-serif">Send Alert</text>
      </g>

      <!-- Bottom label -->
      <text x="280" y="296" text-anchor="middle" fill="#C8D0DA" font-size="8" font-family="'JetBrains Mono',monospace" letter-spacing="1.5">LIVE AUTOMATION PIPELINE</text>
    </svg>
  </div>
</template>

<style scoped>
/* Flowing marching-dash animation on edges */
.ef {
  stroke-dasharray: 8 6;
  animation: dash-march 1.2s linear infinite;
}

@keyframes dash-march {
  from { stroke-dashoffset: 14; }
  to   { stroke-dashoffset: 0; }
}

/* Pulsing outer ring on active nodes */
.pulse-ring {
  animation: ring-pulse 2.4s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}

@keyframes ring-pulse {
  0%, 100% { opacity: 0.08; transform: scale(1); }
  50%       { opacity: 0.35; transform: scale(1.04); }
}

/* Blinking status dot inside active nodes */
.blink {
  animation: dot-blink 2s ease-in-out infinite;
}

@keyframes dot-blink {
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 1; }
}
</style>
