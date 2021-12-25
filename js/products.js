const listProducts = [{
        id: 1,
        img: "./img/dienthoai1.jpg",
        name: "Điện thoại iphone 12 Pro Max 512GB Gold",
        defaultPrice: "31,000,000",
        currentPrice: "29,590,000",
        type: "Điện thoại",
        desc: [
            "Đây là một chiếc điện thoại mới nhất của Apple",
            "Với công nghệ hoàn toàn mới, tối ưu hóa trải nghiệm người dùng",
            "Giá cả phải chăng"
        ],
        isEmpty: false,
        quantity: 25,
    },
    {
        id: 2,
        img: "./img/ipad-ss1.jpg",
        name: "Máy tính bảng iPad Pro M1 12.9 inch",
        defaultPrice: "32,590,000",
        currentPrice: "30,590,000",
        type: "Máy tính bảng",
        desc: [
            "Đây là một chiếc máy tính bảng mới nhất của Apple",
            "Với công nghệ hoàn toàn mới, tối ưu hóa trải nghiệm người dùng",
            "Giá cả phải , phù hợp với mọi lứa tuổi",
            "Hỗ trợ học online rất hữu ích"
        ],
        isEmpty: false,
        quantity: 60,
    },
    {
        id: 3,
        img: "./img/maycu1.jpg",
        name: "Điện thoại Iphone X 512GB Gold 9 inch",
        defaultPrice: "31,999,000",
        currentPrice: "27,990,000",
        type: "Điện thoại",
        desc: [
            "Đây là một chiếc điện thoại ra đời vào năm 2017",
            "Tuy ra đời đã lâu nhưng chất lượng của máy vẫn rất mượt mà",
            "Giá cả phải chăng"
        ],
        isEmpty: true,
        quantity: 0,
    },
    {
        id: 4,
        img: "./img/maycu2.jpg",
        name: "Điện thoại iphone 7plus 64GB White",
        defaultPrice: "12,000,000",
        currentPrice: "9,990,000",
        type: "Điện thoại",
        desc: [
            "Đây là một chiếc điện thoại ra đời đã rất lâu",
            "Với công nghệ apple, tối ưu hóa trải nghiệm người dùng",
            "Giá cả phù hợp với học sinh, sinh viên",
            "Bảo hành 12 tháng 1 đổi 1"
        ],
        isEmpty: false,
        quantity: 17,
    },
    {
        id: 5,
        img: "./img/sac1.jpg",
        name: "Sạc dự phòng dung lượng tối đa 10000 mAH",
        defaultPrice: "3,990,000",
        currentPrice: "1,590,000",
        type: "Sạc dự phòng",
        desc: [
            "Cần thiết đối với những người hay di chuyển nhiều",
            "Mang đi mọi lúc, mọi nơi",
            "Giá cả thì rất rẻ"
        ],
        isEmpty: false,
        quantity: 19,
    },
    {
        id: 6,
        img: "./img/sac3.jpg",
        name: "Sạc dự phòng Xiaomi dung lượng tối đa 12000 mAH ",
        defaultPrice: "5,890,990",
        currentPrice: "3,990,000",
        type: "Sạc dự phòng",
        desc: [
            "Cần thiết đối với những người hay di chuyển nhiều",
            "Mang đi mọi lúc, mọi nơi",
            "Giá cả thì rất rẻ",
            "Dung lượng lớn có thể sạc đầy 4 - 5 lần"
        ],
        isEmpty: true,
        quantity: 0,
    },
    {
        id: 7,
        img: "./img/samsung1.jpg",
        name: "Điện thoại Samsung Galaxy S10+ Gold",
        defaultPrice: "14,890,000",
        currentPrice: "10,990,000",
        type: "Điện thoại",
        desc: [
            "Một chiếc điện thoại tuyệt vời của Samsung",
            "Hỗ trợ bút cảm ứng để thao tác dễ dàng",
            "Mỏng và vô cùng gọn nhẹ",
            "Bảo hành 12 tháng 1 đổi 1"
        ],
        isEmpty: false,
        quantity: 21,
    },
    {
        id: 8,
        img: "./img/table-huawei1.jpg",
        name: "Điện thoại Huawei1 Pro 512GB bản giới hạn",
        defaultPrice: "33,190,000",
        currentPrice: "29,190,000",
        type: "Điện thoại",
        desc: [
            "Một chiếc điện thoại tuyệt vời của Huawe11",
            "Hỗ trợ bút cảm ứng để thao tác dễ dàng",
            "Mỏng và vô cùng gọn nhẹ",
            "Bản giới hạn 200 chiếc"
        ],
        isEmpty: true,
        quantity: 0,
    },
    {
        id: 9,
        img: "./img/table-ipad1.jpg",
        name: "Máy tính bảng iPad Pro M1 16 inch 512GB",
        defaultPrice: "41,290,000",
        currentPrice: "38,590,000",
        type: "Máy tính bảng",
        desc: [
            "Đây là một chiếc máy tính bảng mới nhất của Apple năm 2021",
            "Với công nghệ hoàn toàn mới, tối ưu hóa trải nghiệm người dùng",
            "Giá cả phải , phù hợp với mọi lứa tuổi",
            "Hỗ trợ học online rất hữu ích"
        ],
        isEmpty: false,
        quantity: 35,
    },
    {
        id: 10,
        img: "./img/table-ipad2.jpg",
        name: "Máy tính bảng iPad M1 12.9 inch bản GOLD 264GB",
        defaultPrice: "31,000,000",
        currentPrice: "29,590,000",
        type: "Máy tính bảng",
        desc: [
            "Đây là một chiếc máy tính bảng mới nhất của Apple năm 2019",
            "Với công nghệ hoàn toàn mới, tối ưu hóa trải nghiệm người dùng",
            "Giá cả phải , phù hợp với mọi lứa tuổi",
            "Hỗ trợ học online rất hữu ích",
            "Tiếp tục on top best sell"
        ],
        isEmpty: true,
        quantity: 0,
    },
    {
        id: 11,
        img: "./img/table-ipad4.jpg",
        name: "Máy tính bảng Tablet Samsung bản Pro 512GB",
        defaultPrice: "25,990,000",
        currentPrice: "22,590,000",
        type: "Máy tính bảng",
        desc: [
            "Với công nghệ hoàn toàn mới, tối ưu hóa trải nghiệm người dùng",
            "Giá cả phải , phù hợp với mọi lứa tuổi",
            "Hỗ trợ học online rất hữu ích",
            "Hỗ trợ bút cảm ứng giúp vẽ một cách dễ dàng"
        ],
        isEmpty: false,
        quantity: 11,
    },
    {
        id: 12,
        img: "./img/table-lenovo1.jpg",
        name: "Điện thoại lenovo M1 Blue 512GB",
        defaultPrice: "36,000,000",
        currentPrice: "34,590,000",
        type: "Điện thoại",
        desc: [
            "Đây là một chiếc điện thoại mới nhất của nhà lenovo",
            "Với công nghệ hoàn toàn mới, tối ưu hóa trải nghiệm người dùng",
            "Giá cả phải chăng, phù hợp với mọi lứa tuổi",
            "Bảo hành 12 tháng 1 đổi 1"
        ],
        isEmpty: false,
        quantity: 67,
    },
    {
        id: 13,
        img: "./img/tai nghe bluetooth samsung.jpg",
        name: "Tai nghe bluetootch samsung pro",
        defaultPrice: "2,000,000",
        currentPrice: "1,390,000",
        type: "Tai nghe",
        desc: [
            "Chất lượng âm thanh vô cùng mượt mà",
            "Độ trễ nhỏ, xấp xỉ 100ms",
            "Nhỏ gọn, có thể mang mọi lúc, mọi nơi"
        ],
        isEmpty: false,
        quantity: 15,
    },
    {
        id: 14,
        img: "./img/Airpods 2.jpg",
        name: "Tai nghe Airpods 2 bản VN/A",
        defaultPrice: "4,100,000",
        currentPrice: "2,999,000",
        type: "Tai nghe",
        desc: [
            "Là một trong những chiếc tai nghe của apple đang có lượt mua lớn nhất",
            "Kết nối mọi thiết bị vô cùng dễ dàng",
            "Giá cả không quá cao để mọi người mua"
        ],
        isEmpty: true,
        quantity: 0,
    },
    {
        id: 15,
        img: "./img/apple watch.jpg",
        name: "Đồng hồ thương hiệu Apple Watch Series B",
        defaultPrice: "12,000,000",
        currentPrice: "9,990,000",
        type: "Đồng hồ",
        desc: [
            "Đây là một chiếc điện thoại mới nhất của nhà Apple Watch",
            "Với công nghệ hoàn toàn mới, tối ưu hóa trải nghiệm người dùng",
            "Giá cả phải chăng, phù hợp với mọi lứa tuổi",
            "Bảo hành 12 tháng 1 đổi 1",
            "Điều khiển, kết nối với điện thoại vô cùng dễ dàng"
        ],
        isEmpty: false,
        quantity: 32,
    },
    {
        id: 16,
        img: "./img/huawei band 6 vong tay.jpg",
        name: "Đồng hồ đeo tay thông minh huawei band 6",
        defaultPrice: "5,590,000",
        currentPrice: "3,990,000",
        type: "Đồng hồ",
        desc: [
            "Đây là một chiếc điện thoại mới nhất của nhà huawei",
            "Với công nghệ hoàn toàn mới, tối ưu hóa trải nghiệm người dùng",
            "Đang có chương trình ưu đãi giảm 20%",
            "Bảo hành 12 tháng 1 đổi 1",
            "Nhẹ, gọn, dễ dàng mang theo"
        ],
        isEmpty: false,
        quantity: 24,
    },
    {
        id: 17,
        img: "./img/man hinh samsung.jpg",
        name: "Màn hình Samsung 27 inch, mượt mà trên từng ms",
        defaultPrice: "5,390,000",
        currentPrice: "4,390,000",
        type: "Màn hình máy tính",
        desc: [
            "Đây là một màn hình gaming giá rẻ",
            "Màn có độ chân thực 99%",
            "Độ trễ chỉ 3ms",
        ],
        isEmpty: true,
        quantity: 0,
    },
    {
        id: 18,
        img: "./img/man hinh xiaomi.jpg",
        name: "Màn hình gaming Xiaomi phiên bản 27 inch",
        defaultPrice: "3,000,000",
        currentPrice: "2,190,000",
        type: "Màn hình",
        desc: [
            "Đây là một chiếc màn hình mới nhất của nhà xiaomi",
            "Với công nghệ hoàn toàn mới, tối ưu hóa trải nghiệm người dùng",
            "Bảo hành 12 tháng 1 đổi 1",
            "Nguyên hộp, đầy đủ phụ kiện từ nhà sản xuất"
        ],
        isEmpty: false,
        quantity: 23,
    },
    {
        id: 19,
        img: "./img/may loc khong khi.jpg",
        name: "Máy lọc không khí Vsmart 30la128",
        defaultPrice: "2,990,000",
        currentPrice: "1,590,000",
        type: "Máy lọc không khí",
        desc: [
            "Thiết bị tinh lọc nguồn không khí hiệu quả",
            "1 đổi 1 trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất",
            "Giúp không khí trong nhà bạn sạch sẽ hơn",
            "Dễ dàng bảo dưỡng,tự động thông báo khi hết nước và cần thay màn lọc"
        ],
        isEmpty: false,
        quantity: 52,
    },
    {
        id: 20,
        img: "./img/robot hut bui.jpg",
        name: "Robot hút bụi Dreame D9 Pro",
        defaultPrice: "8,790,000",
        currentPrice: "7,090,000",
        type: "Robot hút bụi",
        desc: [
            "Tích hợp hút bụi và lau nhà 2 trong 1 tiện lợi",
            "Lực hút mạnh mẽ 4000Pa cùng 4 chế độ có thể tuỳ chỉnh",
            "Khăn lau chống vi khuẩn loại bỏ 99% vi khuẩn trên sàn nhà",
            "Dung lượng pin 5200mah cho phép sử dụng 150 phút cho diện tích 200m2",
            "Bảo hành 12 tháng 1 đổi 1",
        ],
        isEmpty: false,
        quantity: 26,
    },
]