export function WaxSeal() {
  return (
    <div className="wax">
      {/* Native img keeps the LCP file on the static CDN. */}
      <img
        src="/wax-seal.webp"
        alt=""
        width={180}
        height={180}
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );
}
