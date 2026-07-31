import * as memberService from "./member.service";

export async function getMembers(c) {
    const members = await memberService.getMembers(c);

    return c.json({
        success: true,
        data: members,
    });
}

export async function createMember(c) {
    const data = await c.req.json();

    const member = await memberService.createMember(c, data);

    return c.json(
        {
            success: true,
            data: member,
        },
        201
    );
}