const FunctionChildComponent = (prop) => {
    // Khi chưa có Hook thì function component sẽ ko giúp lưu trữ, quản lý state
    // Chỉ nên dùng khi Component ko quản lý state
    // Cú pháp ngắn gọn hơn class component
    let {jobDes} = prop;

    let jobDesElement = jobDes.map((item, index)=> {
        return (
            <div key={index}>{item.id} - {item.name}</div>
        )
    })
    return (
        <>
            <div>
                Function component</div>
            {jobDesElement}
        </>
    )
}

export default FunctionChildComponent;