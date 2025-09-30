"use client";

import { getStoryblokApi } from "@/lib/storyBlok";
import React from "react";

export default function StoryblokProvider({ children }: { children: React.ReactNode }) {
getStoryblokApi();
return children;
}