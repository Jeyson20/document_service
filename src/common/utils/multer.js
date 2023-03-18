import { dirname, extname, join } from 'path'
import multer from "multer";
import { fileURLToPath } from "url";
import { MIME_TYPES } from './constants';
import { BadRequestException } from './exceptions';

export const multerUpload = () => {

    const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))

    return multer({
        storage: multer.diskStorage({
            destination: join(CURRENT_DIR, "../../uploads"),

            filename: function (req, file, cb) {
                const fileExt = extname(file.originalname);
                const fileName = file.originalname.split(fileExt)[0];
                cb(null, `${fileName}-${Date.now()}${fileExt}`);
            }
        }),
        limits: {
            fileSize: 10000000,
            files: 5,
        },
        fileFilter: (req, file, cb) => {
            if (MIME_TYPES.includes(file.mimetype)) cb(null, true)
            else {
                const mimesTypes = MIME_TYPES.map(mimeType =>mimeType.split('/')[1])
                cb(new BadRequestException(`Only (${mimesTypes.join(", ")}) mimetypes are allowed`))
            }
        }
    });
};