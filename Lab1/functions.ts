function string_nospace(message: string): number {
    return message.replace(" ", "").length
}

function string_length(message: string, whitespaceCounts?: boolean): number {
    if (whitespaceCounts) {
        return message.length;
    }
    else {
        return message.replace(" ", "").length;
    }
}

let x = string_length("test 1", false)

console.log(x);
