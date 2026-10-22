import { useEffect, useRef, useState } from "react";
import video from "@/assets/rmta-welcome.mp4.asset.json";
import logo from "@/assets/rmta-logo.png.asset.json";

const KEY = "rmta-welcome-seen";
const MAX_MS = 9000;

function seen() {
  try { return sessionStorage.getItem(KEY) === "1"; } catch { return false; }
}
function markSeen() {
  try { sessionStorage.setItem(KEY, "1"); } catch { /* storage unavailable */ }
}

export function WelcomeScreen() {
  const [state, setState] = useState<"pending" | "video" | "fallback" | "leaving" | "done">("pending");
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen() || reduced) { markSeen(); setState("done"); return; }
    setState("video");
    const t = window.setTimeout(() => finish(), MAX_MS);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    markSeen();
    setState((s) => (s === "done" ? s : "leaving"));
    window.setTimeout(() => setState("done"), 700);
  }

  function fail() {
    setState("fallback");
    window.setTimeout(finish, 1400);
  }

  useEffect(() => {
    if (state !== "video" || !ref.current) return;
    ref.current.play()?.catch(fail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  if (state === "done" || state === "pending") return null;

  return (
    <div
      role="dialog"
      aria-label="RMTA Infrastructure welcome"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-welcome transition-opacity duration-700 ${state === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      {state === "fallback" ? (
        <img src={logo.url} alt="RMTA Infrastructure" className="w-64 reveal" />
      ) : (
        <video
          ref={ref}
          src={video.url}
          muted
          autoPlay
          playsInline
          preload="auto"
          onEnded={finish}
          onError={fail}
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
      )}
      <button
        type="button"
        onClick={finish}
        className="eyebrow absolute bottom-6 right-6 rounded-md px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        Skip intro
      </button>
    </div>
  );
}
