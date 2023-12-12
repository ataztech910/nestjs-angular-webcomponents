import { Injectable } from '@nestjs/common';

@Injectable()
export class StatisticsService {
  initList = [];
  resetList() {
    this.initList = [
        {
          id: "1",
          first_name: "Bot1",
          username: "bot1_username",
        },
        {
          id: "2",
          first_name: "Bot2",
          username: "bot2_username",
        },
        {
          id: "3",
          first_name: "Bot3",
          username: "bot3_username",
        },
        {
          id: "4",
          first_name: "Bot4",
          username: "bot4_username",
        },
        {
          id: "5",
          first_name: "Bot5",
          username: "bot5_username",
        }
      ];
  }
  getBotList(): Bot[] {
    this.resetList();
    return this.initList;
  }

  getBotListUpdated(): Bot[] {
    const count = this.initList.length;
    this.initList.push({
            id: count + 1 + '',
            first_name: `Bot${count + 1}`,
            username: `bot${count + 1}_username`,
    })
    return this.initList;
  }
}
