export function success(c, data = null, message = "Success", status = 200) {
    return c.json(
        {
            success: true,
            message,
            data,
        },
        status
    );
}

export function error(c, message = "Something went wrong", status = 500, errors = null) {
    return c.json(
        {
            success: false,
            message,
            errors,
        },
        status
    );
}