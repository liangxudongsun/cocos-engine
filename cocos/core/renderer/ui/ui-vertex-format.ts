/*
 Copyright (c) 2019 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/
/**
 * @packageDocumentation
 * @hidden
 */
import { GFXAttributeName, GFXFormat, GFXFormatInfos } from '../../gfx/define';

interface IVfmt {
    name: string;
    format: GFXFormat;
}

export const vfmt: IVfmt[] = [
    {
        name: GFXAttributeName.ATTR_POSITION,
        format: GFXFormat.RGB32F,
    },
    {
        name: GFXAttributeName.ATTR_COLOR,
        format: GFXFormat.RGBA32F,
    },
];

export const vfmtPosUvColor = [
    {
        name: GFXAttributeName.ATTR_POSITION,
        format: GFXFormat.RGB32F,
    },
    {
        name: GFXAttributeName.ATTR_TEX_COORD,
        format: GFXFormat.RG32F,
    },
    {
        name: GFXAttributeName.ATTR_COLOR,
        format: GFXFormat.RGBA32F,
    },
];

export function getAttributeFormatBytes (attrs: IVfmt[]) {
    let count = 0;
    for (let i = 0; i < attrs.length; i++) {
        const attr = attrs[i];
        const info = GFXFormatInfos[attr.format];
        count += info.count;
    }

    return count;
}

export function getAttributeStride (attrs: IVfmt[]) {
    let count = 0;
    for (let i = 0; i < attrs.length; i++) {
        const attr = attrs[i];
        const info = GFXFormatInfos[attr.format];
        count += info.size;
    }

    return count;
}
