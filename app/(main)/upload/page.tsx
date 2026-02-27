"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { hasSupabase, supabase } from "@/lib/supabase";

export default function UploadPage() {
  const [status, setStatus] = useState<string>("");

  async function onPublish(formData: FormData) {
    const title = String(formData.get("title") ?? "");
    const description = String(formData.get("description") ?? "");
    const filmFile = formData.get("film") as File | null;
    const thumbnailFile = formData.get("thumbnail") as File | null;

    if (!title || !description || !filmFile || !thumbnailFile) {
      setStatus("Please complete all fields.");
      return;
    }

    if (!hasSupabase || !supabase) {
      setStatus("Supabase keys are missing. Configure env vars to enable publishing.");
      return;
    }

    setStatus("Publishing...");

    const filmPath = `films/${Date.now()}-${filmFile.name}`;
    const thumbPath = `thumbnails/${Date.now()}-${thumbnailFile.name}`;

    const { error: videoError } = await supabase.storage.from("films").upload(filmPath, filmFile, {
      upsert: false
    });

    if (videoError) {
      setStatus(`Upload failed: ${videoError.message}`);
      return;
    }

    const { error: thumbnailError } = await supabase.storage
      .from("thumbnails")
      .upload(thumbPath, thumbnailFile, { upsert: false });

    if (thumbnailError) {
      setStatus(`Thumbnail failed: ${thumbnailError.message}`);
      return;
    }

    const { error: insertError } = await supabase.from("films").insert({
      title,
      description,
      film_path: filmPath,
      thumbnail_path: thumbPath
    });

    setStatus(insertError ? `Publish failed: ${insertError.message}` : "Published successfully.");
  }

  return (
    <div className="space-y-4 pb-6">
      <h1 className="text-2xl font-bold">Upload new film</h1>

      <form action={onPublish} className="space-y-4">
        <div>
          <label htmlFor="film" className="mb-2 block text-sm text-muted-foreground">
            Select video file
          </label>
          <Input id="film" name="film" type="file" accept="video/*" />
        </div>

        <div>
          <label htmlFor="title" className="mb-2 block text-sm text-muted-foreground">
            Title
          </label>
          <Input id="title" name="title" placeholder="Enter film title" />
        </div>

        <div>
          <label htmlFor="description" className="mb-2 block text-sm text-muted-foreground">
            Description
          </label>
          <Textarea id="description" name="description" placeholder="Short description..." />
        </div>

        <div>
          <label htmlFor="thumbnail" className="mb-2 block text-sm text-muted-foreground">
            Thumbnail
          </label>
          <Input id="thumbnail" name="thumbnail" type="file" accept="image/*" />
        </div>

        <Button className="w-full">Publish</Button>
      </form>

      {status && <p className="rounded-lg bg-secondary p-3 text-sm text-secondary-foreground">{status}</p>}
    </div>
  );
}
