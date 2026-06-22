'use client';

import { useState } from 'react';

export default function ImageUploader({ onUploaded }: { onUploaded?: (url: string) => void }) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const data = reader.result as string;
      setPreview(data);
      setLoading(true);
      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data, filename: file.name })
        });
        const json = await res.json();
        if (json?.result?.secure_url) {
          onUploaded?.(json.result.secure_url);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="space-y-3">
      <label className="inline-flex items-center gap-3 rounded-3xl bg-[#08122A]/95 px-4 py-2 text-sm text-slate-300">
        <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
        <span>{loading ? 'Uploading…' : 'Upload image'}</span>
      </label>
      {preview ? <img src={preview} alt="preview" className="mt-3 max-h-40 rounded-lg" /> : null}
    </div>
  );
}
