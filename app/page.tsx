"use client";

import {
  LinkedinLogoIcon,
  GithubLogoIcon,
  FolderOpenIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react";

export default function Page() {
  return (
    <main className="max-w-xl mx-auto px-6 py-20 space-y-6">
      <div className="text-sm sm:text-lg leading-relaxed text-muted">
        <h1 className="inline font-normal text-foreground">Sunmyeong Lee</h1>
        {" "}is a curious AI UXer who bridges design, AI, and engineering.{" "}
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
      </div>
      <div className="flex gap-3">
        <a
          href="mailto:sunnie@sogang.ac.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors duration-300"
          aria-label="Mail"
        >
          <EnvelopeSimpleIcon size={24} />
        </a>
        <a
          href="https://linkedin.com/in/sunmyeonglee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <LinkedinLogoIcon size={24} />
        </a>
        <a
          href="https://github.com/sunmyeonglee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors duration-300"
          aria-label="GitHub"
        >
          <GithubLogoIcon size={24} />
        </a>
        <a
          href="https://www.notion.so/sunmyeonglee/231d5dc81f6680ab8a54d9d64130af77?v=231d5dc81f6680f1827b000c44391519&source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors duration-300"
          aria-label="FolderOpen"
        >
          <FolderOpenIcon size={24} />
        </a>
      </div>
    </main>
  );
}
