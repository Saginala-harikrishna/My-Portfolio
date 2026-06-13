export default function VideoCard({ video }) {
  return (
    <a
      href="https://youtu.be/A-unaCRZXW8"
      target="_blank"
      rel="noreferrer"
      className="block border rounded-2xl overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
        alt={video.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <p className="text-sm text-gray-500">
          {video.category}
        </p>

        <h3 className="font-semibold mt-2">
          {video.title}
        </h3>

        <p className="mt-3 text-black font-medium">
          Watch on YouTube →
        </p>

      </div>
    </a>
  );
}