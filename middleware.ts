import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Định nghĩa các route công khai
// Bao gồm route gốc ("/") và route Webhook Stripe
const isPublicRoute = createRouteMatcher([
    '/',
    '/api/webhooks/stripe', // <--- ĐÃ THÊM DÒNG NÀY
    '/sign-in(.*)' // Giữ lại các route công khai khác nếu cần (ví dụ: sign-in, sign-up)
]);

export default clerkMiddleware(async (auth, req) => {
    // Nếu route KHÔNG phải là route công khai, thì bảo vệ nó
    if (!isPublicRoute(req)) {
        await auth.protect();
    }
});

export const config = {
    matcher: [
        // Các đường dẫn mà Clerk Middleware cần chạy
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Luôn chạy cho API routes
        '/api/(.*)', 
    ],
};