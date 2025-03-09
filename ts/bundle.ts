import { test } from "./imp.ts";
import { H5P } from "h5p-standalone";

export function loadH5P(elementId: string, h5pJsonPath: string): void {
  const el = document.getElementById(elementId);

  if (el) {
    const options = {
      h5pJsonPath: h5pJsonPath,
      frameJs: "h5p/3.8.0/frame.bundle.js", // Constant path
      frameCss: "h5p/3.8.0/styles/h5p.css", // Constant path
    };

    new H5P(el, options);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}
