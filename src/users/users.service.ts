import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import * as uuid from 'uuid';
// import userInfo from './UserInfo';

@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) {}

  async create(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    await this.saveUser(name, email, password, signupVerifyToken);
    return;
  }

  async createUser(name: string, email: string, password: string) {
    // await this.checkUserExist(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  private checkUserExists(email: string) {
    return false; // DB 연동 후 구현
  }

  private saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    return; //TODO : DB 연동 후 구현
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    // TODO : DB에서 signupverifytoken으로 회원가입 처리 중인 유저가 있는지 조회하고, 없다면 에러 처리
    // TODO : 바로 로그인 상태가 되도록 jwt 발급

    throw new Error('method not implemented');
  }

  async login(email: string, password: string): Promise<string> {
    // TODO: email, pwd 를 가진 유저가 존재하는지 확인하고, 없다면 에러 처리, JWT 발급
    throw new Error('Method not implemented');
  }

  async getUserInfo(userId: string): Promise<any> {
    // UserId를 가진 유저가 존재하는지 DB에 확인하고 없다면 에러, 조회된 데이터를 userInfo 타입으로 응답
    throw new Error('Method not implement');
  }

  async remove(userId: string): Promise<boolean> {
    throw new Error('Method not implement');
  }
}
