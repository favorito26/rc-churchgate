import * as repository from "./member.repository";
import { createMemberSchema } from "./member.validation";
import { toMemberResponse } from "./member.dto";
import { createUserWithMember } from "../shared/user-member.service";

export async function getMembers(c) {
    const members = await repository.findAllMembers(c);

    return members.map(toMemberResponse);
}

export async function createMember(c, data) {
    const validatedData = createMemberSchema.parse(data);

    if (!validatedData.userId) {
        const result = await createUserWithMember(c, validatedData);
        return toMemberResponse(result.member);
    }

    const member = await repository.createMember(c, validatedData);

    return toMemberResponse(member);
}