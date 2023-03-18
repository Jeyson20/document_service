import { BadRequestException, multerUpload } from "../../common/utils";

export class DocumentService {

    async ping() {
        return "pong";
    }

    async uploadFiles(req) {
        return new Promise((resolve, reject) => {
            multerUpload().array('files')(req, null, (err) => {
                if (err) {
                    reject(err);
                }

                if (typeof req.files === 'undefined' || req.files.length === 0) {
                    reject(new BadRequestException('Debe adjuntar al menos un archivo'));
                }
                const files = req.files.map(file => ({
                    fileName: file.filename,
                    path: file.path
                }));

                resolve(files);
            });
        });
    }

}