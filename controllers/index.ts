import { Request, Response } from 'express';

const homePageController = (req: Request, res: Response) => {
	res.render('index');
}

export default homePageController;