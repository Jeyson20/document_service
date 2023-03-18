export class DocumentController {
  #documentService = null;
  constructor(DocumentService) {
    this.#documentService = DocumentService;
  }

  ping = async (req = null, res) => {
    const message = await this.#documentService.ping();

    return res.send(message);
  };


  uploadFiles = async (req, res) => {
    try {
      const fileData = await this.#documentService.uploadFiles(req);
      res.status(200).send({ files: fileData });

    } catch (err) {
      
      res.status(400).send({
        code: 400,
        message: err.message
      });
    }
  };
};