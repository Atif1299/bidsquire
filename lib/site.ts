const DEFAULT_SIGNUP =
  "https://onboarding.bidsquire.com/signup";
const DEFAULT_SIGNIN = "https://app.bidsquire.com/auth/login";

export function getSignupUrl(): string {
  return process.env.NEXT_PUBLIC_ONBOARDING_SIGNUP_URL ?? DEFAULT_SIGNUP;
}

export function getSignInUrl(): string {
  return process.env.NEXT_PUBLIC_APP_SIGNIN_URL ?? DEFAULT_SIGNIN;
}
