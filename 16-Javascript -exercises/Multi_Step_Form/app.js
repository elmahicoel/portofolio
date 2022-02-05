coloane = $('.col-xs-4');

    if(coloane.eq(0).hasClass('active')) {
        $(coloane).eq(0).siblings().hide();
    }

    $(".next").on("click", function () {
        const a = $(this).parent();
        a.next().show();
        a.hide();
        if(a.next().index() === (coloane.length -1)) {
            console.log("ultimul");
        }
      });

    $(".prev").on("click", function () {
        const a = $(this).parent();
        a.prev().show();
        a.hide();
        if(a.prev().index() === 0) {
            console.log("primul");
        }
      });

