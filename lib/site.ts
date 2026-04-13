const DEFAULT_SIGNUP = "https://onboarding.bidsquire.com/signup";
const DEFAULT_SIGNIN = "https://app.bidsquire.com/auth/login";

export function getSignupUrl(): string {
  const url = process.env.NEXT_PUBLIC_ONBOARDING_SIGNUP_URL?.trim();
  return url && url.length > 0 ? url : DEFAULT_SIGNUP;
}

export function getSignInUrl(): string {
  const url = process.env.NEXT_PUBLIC_APP_SIGNIN_URL?.trim();
  return url && url.length > 0 ? url : DEFAULT_SIGNIN;
}
