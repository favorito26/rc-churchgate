export function toUserResponse(user) {
    return {
        id: user.id,
        email: user.email,
        role: user.role,
        status: user.status,
    };
}