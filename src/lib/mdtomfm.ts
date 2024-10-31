// @ts-ignore
import mtp from "markdown-tree-parser";

let last = "";

export type MDtypes = {
    value: string;
    values: string;
    name: string;
    type: string;
    title: string;
    href: string;
    level: number;
    order: number;
    checked: boolean;
};

export const mfm = (input: string) => {
    let tree = mtp(input);
    let dump = tree.dump();
    return convert(dump);
};

// 配列を分割して渡す

export const convert = (input: string) => {
    let output = "";
    let obj = JSON.parse(input);
    for (var i = 0; i < obj.length; i++) {
        output = output + convertv(obj[i]);
    }
    return output;
};

// 配列の中の配列を渡す

export const convertv = (input: MDtypes) => {
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

export const type = (input: MDtypes) => {
    let data;
    if (input.type == "block") {
        data = block(input);
    } else {
        data = inline(input);
    }
    return data;
};

// block

export const block = (input: MDtypes) => {
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
            data = codeblock(input)
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
            data = "block(未実装)";
    }
    return data;
};

export const paragraph = (input: MDtypes) => {
    return "\n";
};

export const horizontal = (input: MDtypes) => {
    return "\n--------------------------------------";
};

export const codeblock = (input: MDtypes) => {
    last = "\n```";
    return "\n```\n";
}

export const blockquote = (input: MDtypes) => {
    let level = input.level
    let than = "";
    for (var i = 0; i < level; i++) {
        than = than + ">"
    }
    return "\n" + than + " ";
};

export const heading = (input: MDtypes) => {
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

export const list = (input: MDtypes) => {
    return "\n    ･";
};

export const orderedlist = (input: MDtypes) => {
    let ord = input.order;
    return "\n    " + ord + ". ";
};

export const checklist = (input: MDtypes) => {
    let chk = input.checked;
    let ord;
    if (chk == true) {
        ord = "✅";
    } else {
        ord = "🔳";
    }
    return "\n    " + ord + " ";
};

// inline

export const inline = (input: MDtypes) => {
    let data;
    let type = input.name;
    switch(type) {
        case "text":
            data = text(input);
            break;
        case "code":
            data = code(input);
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
            data = "inline(未実装)";
    }
    return data;
};

// 以下変換

export const text = (input: MDtypes) => {
    return input.value;
};

export const code = (input: MDtypes) => {
    return "`" + input.value + "`";
};

export const em = (input: MDtypes) => {
    return "<i>" + input.value + "</i>";
};

export const italic = (input: MDtypes) => {
    return "<i>" + input.value + "</i>";
};

export const emitalic = (input: MDtypes) => {
    return "<i>" + input.value + "</i>";
};

export const strikethrough = (input: MDtypes) => {
    return "~~" + input.value + "~~";
};

export const link = (input: MDtypes) => {
    return "[ " + input.title + " ](" + input.href + ")";
};