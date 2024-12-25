/**
 * Rename file - change extname or/and added suffix
 * @type { function rename({ basename?: string | null; extname?: string | null; suffix?: string | null }) }
 */
export default function rename({ basename, extname, suffix, }?: {
    basename?: string | null;
    extname?: string | null;
    suffix?: string | null;
}): import("stream").Transform;
