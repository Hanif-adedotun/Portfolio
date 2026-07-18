export const SOUND_PREFERENCE_KEY = "portfolio:sound-enabled";

export function getSoundEnabled(): boolean {
  try {
    return localStorage.getItem(SOUND_PREFERENCE_KEY) !== "false";
  } catch {
    return true;
  }
}

export function saveSoundEnabled(enabled: boolean): void {
  try {
    localStorage.setItem(SOUND_PREFERENCE_KEY, String(enabled));
  } catch {
    // Sound still works when storage is unavailable; only persistence is lost.
  }
}
