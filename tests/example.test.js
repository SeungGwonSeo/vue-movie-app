import * as example from "./example";

describe('비동기 테스트', () => {
    // test('done', (done) => {
    //     asyncFn().then(res => {
    //         expect(res).toBe('Done!')
    //         done()
    //     }, 2000)
    // })

    // test('then', () => {
    //     return asyncFn().then(res => {
    //         expect(res).toBe('Done!')
    //     })
    // })

    // test('resolves', () => expect(asyncFn()).resolves.toBe('Done!'))

    test('async/await', async () => {
        jest.spyOn(example, 'asyncFn').mockResolvedValue('Done!')
        const res = await example.asyncFn()
        expect(res).toBe('Done!')
    }, 7000)

    // test의 기다리는 시간(기본값)은 5000ms로 되어있어 세번째 인수값을 추가!

    //4가지 다 같은 테스트 방식 (차이만있음.)
})