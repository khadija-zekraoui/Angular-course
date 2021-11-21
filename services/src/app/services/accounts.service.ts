export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
    console.log("file: accounts.service.ts ~ line 18 ~ AccountService ~ addAccount ~ name", name)
    this.accounts.push({name, status});
    console.log("file: accounts.service.ts ~ line 20 ~ AccountService ~ addAccount ~ this.accounts", this.accounts)
    
  }

  UpdateAccount(id: number, status: string) {
    this.accounts[id].status = status;
  }
}