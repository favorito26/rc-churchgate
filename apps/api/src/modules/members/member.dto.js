export function toMemberResponse(member) {
    return {
        id: member.id,
        firstName: member.firstName,
        lastName: member.lastName,
        phone: member.phone,
        profession: member.profession,
        joinedAt: member.joinedAt,
    };
}

export function toUserResponse(user) {
    return {
        id: user.id,
        email: user.email,
        role: user.role,
        status: user.status,
    };
}