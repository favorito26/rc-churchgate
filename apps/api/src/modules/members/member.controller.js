import * as memberService from "./member.service";

export async function getMembers(c) {
    const members = await memberService.getMembers(c);

    return c.json({
        success: true,
        data: members,
    });
}