
		$(document).ready(function () {
			$('#link-top').click(function () {
				$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
			});
		});


		$('.carousel').carousel({
			interval: 2500,
			pause: 'hover',

		});

		var arrLang = {
          "en-gb": {
            "HOME": "TRANG CHỦ",
            "INTRODUCE":"GIỚI THIỆU",
			"PRODUCTS":"SẢN PHẨM",
			"PROJECTS":"DỰ ÁN",
			"SERVICE":"DỊCH VỤ",
			"NEWS":"TIN TỨC",
			"RECRUITMENT":"TUYỂN DỤNG",
			"CONTACT":"LIÊN HỆ",
			"MAINNAME1":"CÔNG TY CỔ PHẦN THIẾT BỊ CÔNG NGHỆ CAO TM",
			"MAINNAME2":"Nhập khẩu và Phân Phối Thiết Bị Y Tế Cao Cấp Chính Hãng",
			"PARA1":"Với đội ngũ chuyên gia có kinh nghiệm hơn 10 năm tham gia các dự án đầu tư mua sắm trang thiết bị y tế, TM Hitech đảm bảo sẽ đưa ra những tư vấn hữu ích cho dự án của bạn. Chúng tôi cam kết tư vấn miễn phí trong toàn bộ dự án với mục tiêu tạo sự tin tưởng và mối liên hệ tốt với khách hàng.",
			"PARA2":"Trong bối cảnh thị trường rộng mở như hiện nay, có rất nhiều dòng thiết bị y tế với giá cả và chất lượng khác nhau để khách hàng lựa chọn. Điều này đôi khi làm khó cho các quyết định đầu tư của khách hàng.",
			"PARA3":"Kinh nghiệm lâu năm trong ngành thiết bị y tế, TM Hitech tự tin có thể hỗ trợ khách hàng thiết kế tổng thể dự án, xây dựng cấu hình chi tiết các dòng thiết bị sử dụng cho bệnh viện hay phòng khám của bạn.",
			"SERVICE1":"Dịch vụ trong bảo hành",
			"PARA4":"Tất cả các thiết bị Công ty cung cấp đều được bảo hành đảm bảo theo đúng tiêu chuẩn và cam kết của nhà sản xuất. Đội ngũ kỹ sư của Công ty giàu kinh nghiệm được cử đi tập huấn và đào tạo hàng năm ở nước ngoài theo các khoá tập huấn của Hãng đại diện, nhà sản xuất... chúng tôi hy vọng đáp ứng được yêu cầu của quý khách hàng.",
			"PARA5":"Bất cứ lúc nào trong thời gian ngắn nhất, nhân viên kỹ thuật sẽ có mặt theo yêu cầu của khách hàng để chỉ dẫn thêm những vấn đề liên quan đến kỹ thuật của máy hoặc xử lý những sự cố bất thường.",
			"PARA6":"Kiểm tra định kỳ lâu dài cho tất cả các thiết bị do Công ty cung cấp.",
			"PARA7":"Sẵn sàng ký hợp đồng bảo trì nếu Quý khách hàng có yêu cầu, giá cả phù hợp với giá hiện hành trên thị trường.",
			"PARA8":"Với kinh nghiệm & uy tín của mình, TMHitech luôn cam kết hoàn thành tốt nhất các yêu cầu về cung cấp, lắp đặt & hướng dẫn, tư vấn cho các khách hàng.",
			"MAINNAME3":"TM HI-TECH JSC.",
			"UNIPRO":"SẢN PHẨM NỔI BẬT",
			"T1":"CHUẨN ĐOÁN HÌNH ẢNH",
			"DETAIL":"Xem chi tiết",
			"HIGHLIGHTNEWS":"TIN NỔI BẬT",

			},
          "zh-tw": {
			"HOME": "HOME",
            "INTRODUCE":"INTRODUCE",
			"PRODUCTS":"PRODUCTS",
			"PROJECTS":"PROJECTS",
			"SERVICE":"SERVICE",
			"NEWS":"NEWS",
			"RECRUITMENT":"RECRUITMENT",
			"CONTACT":"CONTACT",
			"MAINNAME1":"TRADE HIGH TECH EQUIPMENT JOINT STOCK COMPANY",
			"MAINNAME2":"Importing and Distributing Genuine Premium Medical Equipment",
			"PARA1":"With a team of experts with more than 10 years of experience in medical equipment procurement investment projects, TM Hitech ensures to give useful advice for your project. We are committed to free consultation in the entire project with the goal of creating trust and good relationship with customers.",
			"PARA2":"In the context of the current open market, there are many lines of medical equipment with different prices and quality for customers to choose from. This sometimes makes it difficult for customers to make investment decisions.",
			"PARA3":"With many years of experience in the medical equipment industry, TM Hitech can confidently support customers in the overall design of the project, building detailed configuration of equipment lines used for your hospital or clinic.",
			"SERVICE1":"Service in warranty",
			"PARA4":"All equipment provided by the Company is guaranteed according to the standards and commitments of the manufacturer. The company's experienced engineers are sent to train and train abroad every year according to the training courses of the representative firms, manufacturers... we hope to meet your requirements. client.",
			"PARA5":"At any time in the shortest possible time, technical staff will be available at the request of the customer to guide further technical problems of the machine or handle unusual problems.",
			"PARA6":"Long term periodic inspection of all equipment provided by the Company.",
			"PARA7":"Ready to sign a maintenance contract if required by the customer, the price is consistent with the current market price.",
			"PARA8":"With its experience & reputation, TMHitech is always committed to fulfilling the best requirements for supply, installation & guidance, consulting for customers.",
			"MAINNAME3":"TM HI-TECH JSC.",	
			"UNIPRO":"HIGHLIGHTS PRODUCTS",
			"T1":"IMAGE ANALYSATION",
			"DETAIL":"Detail",
			"HIGHLIGHTNEWS":"HIGHLIGHT NEWS",
			}
        };

        $(document).ready(function() {
          // The default language is English
          var lang = "en-gb";
          $(".lang").each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr("key")]);
          });
        });

        // get/set the selected language
        $(".translate").click(function() {
          var lang = $(this).attr("id");

          $(".lang").each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr("key")]);
          });
        });
