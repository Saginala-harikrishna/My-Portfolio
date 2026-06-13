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
        className="w-full h-40 md:h-48 object-cover"
      />

      <div className="p-4 md:p-5">

        <p className="text-xs md:text-sm text-gray-500">
          {video.category}
        </p>

        <h3 className="font-semibold text-sm md:text-base mt-2 line-clamp-2">
          {video.title}
        </h3>

        <p className="mt-3 text-sm md:text-base text-black font-medium">
          Watch on YouTube →
        </p>

      </div>
    </a>
  );
}