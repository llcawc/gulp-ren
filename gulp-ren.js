import { Buffer } from 'node:buffer';
import through2 from 'through2';
/**
 * Rename file - change extname or/and added suffix
 * @type { function rename({ basename?: string | null; extname?: string | null; suffix?: string | null }) }
 */
export default function rename({ basename = null, extname = null, suffix = null, } = {}) {
    return through2.obj(function (file, _, cb) {
        if (file.isBuffer()) {
            file.contents = Buffer.from(file.contents);
            if (basename) {
                file.basename = basename;
            }
            const extName = file.extname;
            if (suffix && extname) {
                file.extname = suffix + extname;
            }
            if (suffix && !extname) {
                file.extname = suffix + extName;
            }
            if (!suffix && extname) {
                file.extname = extname;
            }
        }
        cb(null, file);
    });
}
