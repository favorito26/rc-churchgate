import * as repository from "./member.repository";
import { createMemberSchema } from "./member.validation";
import { toMemberResponse } from "./member.dto";

export async function getMembers(c) {
    const members = await repository.findAllMembers(c);

    return members.map(toMemberResponse);
}

export async function createMember(c, data) {
    const validatedData = createMemberSchema.parse(data);

    const member = await repository.createMember(c, validatedData);

    return toMemberResponse(member);
}