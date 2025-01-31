"use server";
import { copyFile } from "copy-file";
import fs from "fs/promises";
import path from "path";

export const getPreviewCode = async (
  component: string,
  category: string,
  variants: { tsx: boolean; jsx: boolean }
) => {
  const { tsx, jsx } = variants;

  try {
    let tsxData = null;
    let jsxData = null;

    if (tsx) {
      const tsxFilePath = path.join(
        process.cwd(),
        `src/dev-components-txt/${category}/${component}/${component}-tsx.txt`
      );
      tsxData = await fs.readFile(tsxFilePath, "utf-8");
    }

    if (jsx) {
      const jsxFilePath = path.join(
        process.cwd(),
        `src/dev-components-txt/${category}/${component}/${component}-jsx.txt`
      );
      jsxData = await fs.readFile(jsxFilePath, "utf-8");
    }

    if (!tsx && !jsx) {
      return { message: "Invalid variants", status: 500 };
    }
    return {
      message: { tsxCode: tsxData, jsxCode: jsxData },
      status: 200,
    };
  } catch (error: any) {
    return { message: error.message, status: 500 };
  }
};

export const getUsageCode = async (component: string, category: string) => {
  try {
    const filePath = path.join(
      process.cwd(),
      `src/dev-components-txt/${category}/${component}/${component}-usage.txt`
    );
    console.log(`Reading file from path: ${filePath}`);
    const data = await fs.readFile(filePath, "utf-8");
    return { message: data, status: 200 };
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
    return { message: error.message, status: 500 };
  }
};

export const generateFileLocally = async (
  component: string,
  category: string,
  variants: { tsx: boolean; jsx: boolean }
) => {
  const { tsx, jsx } = variants;
  try {
    await copyFile(
      `public/dev-components/${category}/(${component})/page.tsx`,
      `src/dev-components-txt/${category}/${component}/${component}-usage.txt`
    );
    if (tsx) {
      await copyFile(
        `public/dev-components/${category}/(${component})/${component}.tsx`,
        `src/dev-components-txt/${category}/${component}/${component}-tsx.txt`
      );
    }

    if (jsx) {
      await copyFile(
        `public/dev-components/${category}/(${component})/${component}.jsx`,
        `src/dev-components-txt/${category}/${component}/${component}-jsx.txt`
      );
    }

    if (!tsx && !jsx) {
      return { message: "Invalid variants", status: 500 };
    }

    return { message: "data", status: 200 };
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
    return { message: error.message, status: 500 };
  }
};
