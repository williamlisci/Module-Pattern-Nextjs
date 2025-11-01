// src/utils/userUtils.ts
// Module Pattern: Sử dụng IIFE để tạo closure, đóng gói private/public members

const UserUtils = (function() {
    // Private variables và methods (không expose ra ngoài)
    const privateEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex validate email

    function privateSanitizeName(name: string): string {
        return name.trim().toLowerCase().replace(/\s+/g, '-'); // Helper private để format
    }

    // Public methods (return object với các hàm public)
    return {
        // Validate email sử dụng private regex
        validateEmail: (email: string): boolean => {
            return privateEmailRegex.test(email);
        },

        // Format username, sử dụng private helper
        formatUserName: (firstName: string, lastName: string): string => {
            const sanitizedFirst = privateSanitizeName(firstName);
            const sanitizedLast = privateSanitizeName(lastName);
            return `${sanitizedFirst}-${sanitizedLast}`;
        }
    };
})();

export default UserUtils; // Export module để dùng trong Next.js