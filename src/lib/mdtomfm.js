import mtp from "markdown-tree-parser";

let last = "";

/**
 * @param {string} input
 */
export const mfm = (input) => {
    let tree = mtp(input);
    let dump = tree.dump();
    console.log(convert(dump));
    return convert(dump);
};

// 配列を分割して渡す

/**
 * @param {string} input
 */
export const convert = (input) => {
    let output = "";
    const obj = JSON.parse(input);
    for (var i = 0; i < obj.length; i++) {
        output = output + convertv(obj[i]);
    }
    return output;
};

// 配列の中の配列を渡す

/**
 * @param {*} input
 */
export const convertv = (input) => {
    let output = "";
    let data;
    const obj = input.values;
    for (var i = 0; i < obj.length; i++) {
        // @ts-ignore
        output = output + type(obj[i]);
    }
    last = "";
    data = type(input) + output + last;
    last = "";
    return data;
};

// 中身を分析

/**
 * @param {*} input
 */
export const type = (input) => {
    let data;
    if (input.type == "block") {
        data = block(input);
    } else {
        data = inline(input);
    }
    return data;
};

/**
 * @param {*} input
 */
export const block = (input) => {
    let data;
    let type = input.name;
    switch(type) {
        case "paragraph":
            data = paragraph(input);
            break;
        case "horizontal":
            break;
        case "code":
            break;
        case "blockquote":
            data = blockquote(input);
            break;
        case "heading":
            data = heading(input);
            break;
        case "list":
            break;
        case "orderedlist":
            break;
        case "checklist":
            break;
        case "table":
            break;
        default:
            data = "block";
    }
    return data;
};

/**
 * @param {*} input
 */
export const paragraph = (input) => {
    input = "\n";
    return input;
};

/**
 * @param {*} input
 */
export const blockquote = (input) => {
    input = "\n> ";
    return input;
};

/**
 * @param {*} input
 */
export const heading = (input) => {
    let level = input.level;
    if (level > 4) {
        level = 4;
    } else {
        level = (4 - level) + 1;
    }
    last = "]\n";
    return "$[x" + level + " ";
};

/**
 * @param {*} input
 */
export const inline = (input) => {
    let data;
    let type = input.name;
    switch(type) {
        case "text":
            data = text(input);
            break;
        case "html":
            break;
        case "htmlcontent":
            break;
        case "em":
            data = em(input);
            break;
        case "italic":
            data = italic(input);
            break;
        case "emitalic":
            data = emitalic(input);
            break;
        case "strikethrough":
            data = strikethrough(input);
            break;
        case "inlinecode":
            break;
        case "image":
            break;
        case "link":
            data = link(input);
            break;
        default:
            data = "inline";
    }
    return data;
};

// 以下変換

/**
 * @param {*} input
 */
export const text = (input) => {
    return input.value;
};

/**
 * @param {*} input
 */
export const em = (input) => {
    return "<i>" + input.value + "</i>";
};

/**
 * @param {*} input
 */
export const italic = (input) => {
    return "<i>" + input.value + "</i>";
};

/**
 * @param {*} input
 */
export const emitalic = (input) => {
    return "<i>" + input.value + "</i>";
};

/**
 * @param {*} input
 */
export const strikethrough = (input) => {
    return "~~" + input.value + "~~";
};

/**
 * @param {*} input
 */
export const link = (input) => {
    return "[ " + input.title + " ](" + input.href + ")";
};