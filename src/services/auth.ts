import type { AuthResult, LoginInput, RegisterInput } from "@/types/auth";

/**
 * Authentication service.
 *
 * IMPORTANT: Agronova has no authentication backend yet.
 * - With VITE_API_BASE_URL unset, this runs in DEMO MODE: inputs are validated
 *   in the browser, nothing is stored or sent anywhere, and no account is
 *   created. The UI shows a visible "demo mode" notice in this case.
 * - Once a real provider is chosen, implement the calls below (and keep
 *   passwords and Aadhar numbers out of logs and local storage).
 */
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim();

export const isDemoMode = !API_BASE_URL;

const demoDelay = () => new Promise((resolve) => setTimeout(resolve, 600));

const notImplemented = (): AuthResult => ({
  ok: false,
  mode: "backend",
  error:
    "A backend URL is configured, but the authentication endpoints are not implemented in the frontend yet.",
});

export async function login(_input: LoginInput): Promise<AuthResult> {
  if (isDemoMode) {
    await demoDelay();
    return { ok: true, mode: "demo" };
  }
  // TODO: call the real login endpoint here.
  return notImplemented();
}

export async function register(_input: RegisterInput): Promise<AuthResult> {
  if (isDemoMode) {
    await demoDelay();
    return { ok: true, mode: "demo" };
  }
  // TODO: call the real registration endpoint here.
  return notImplemented();
}
