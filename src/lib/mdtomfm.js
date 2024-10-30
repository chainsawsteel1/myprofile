import mtp from "markdown-tree-parser";

let last = "";

/**
 * @param {string} input
 */
export const mfm = (input) => {
    let tree = mtp(input);
    let dump = tree.dump();
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

// block

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
            data = horizontal(input);
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
            data = list(input);
            break;
        case "orderedlist":
            data = orderedlist(input);
            break;
        case "checklist":
            data = checklist(input);
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
export const horizontal = (input) => {
    input = "\n--------------------------------------";
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
    let first;
    switch(level) {
        case 1:
            first = "$[scale.x=2,y=2 $[position.x=1";
            break;
        case 2:
            first = "$[scale.x=1.5,y=1.5 $[position.x=.8";
            break;
        default:
            first = "$[scale.x=1.2,y=1.2 $[position.x=.5 ";
            break;
    }
    last = "]]";
    return first + " ";
};

/**
 * @param {*} input
 */
export const list = (input) => {
    input = "\n    ･";
    return input;
};

/**
 * @param {*} input
 */
export const orderedlist = (input) => {
    let ord = input.order;
    input = "\n    " + ord + ". ";
    return input;
};

/**
 * @param {*} input
 */
export const checklist = (input) => {
    let chk = input.checked;
    let ord;
    if (chk == true) {
        ord = "✅";
    } else {
        ord = "🔳";
    }
    input = "\n    " + ord + " ";
    return input;
};

// inline

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