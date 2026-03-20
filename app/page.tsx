"use client";

import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Page() {
  return (
    <main className="max-w-xl mx-auto px-6 py-20 space-y-6">
      <p className="text-lg leading-relaxed text-muted">
        <span className="text-foreground">
          Sunmyeong Lee is a curious AI UXer who bridges design, AI, and
          engineering.
        </span>{" "}
        She is studying B.A.S in{" "}
        <a
          href="https://creative.sogang.ac.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors duration-300"
        >
          Art & Technology
        </a>{" "}
        and B.S in Artificial Intelligence at Sogang University, and is
        currently working as an undergraduate research assistant at{" "}
        <a
          href="https://dxd-lab.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors duration-300"
        >
          KAIST DxD Lab
        </a>{" "}
        under the advice of Dr. Hwajung Hong.
      </p>
      <div className="flex gap-3">
        <a
          href="https://linkedin.com/in/sunmyeonglee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <LinkedinLogo size={24} />
        </a>
        <a
          href="https://github.com/sunmyeonglee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors duration-300"
          aria-label="GitHub"
        >
          <GithubLogo size={24} />
        </a>
      </div>
    </main>
  );
}
