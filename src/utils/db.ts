import { Sequelize} from 'sequelize';

import logger from './logger';

const sequelize = new Sequelize({dialect: 'sqlite', storage: '../db.db', logging: msg=> logger.debug(msg)});

export default sequelize;