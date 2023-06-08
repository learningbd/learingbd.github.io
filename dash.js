$(document).ready(function () {
    if ($("#classvidctr").length) { setInterval(function () { $.get("/my/ping?v=" + Math.random(), function (o) { "login" == o ? window.location.replace("/my/logout") : "OKK" != o && ($("body").html(""), location.reload()) }) }, 1e4) }
    $("#lELdtKzwvW").click(function () {
        event.preventDefault(); var btn = $(this); console.log('click'); var axfuname = $("#itUCyWDOTy").val(); var formurl = $("#fbglajxurl").val(); $(".btn").prop("disabled", true); btn.addClass("loading"); $("#RrqLawLYDR").html(''); $.post(formurl, { prekey: 'UGOyYjUtrz', funame: axfuname }, function (data) {
            if (data === 'NEXT') { $(".prelogincard").removeClass("first"); $(".prelogincard").addClass("second"); } else if (data === 'GO') { window.location.replace('/my/login'); } else { $("#RrqLawLYDR").html(data); }
            $(".btn").prop("disabled", false); btn.removeClass("loading");
        });
    }); $("#OluJOYgjej").click(function () {
        event.preventDefault(); var btn = $(this); var axfunum = $("#uEhiYkFZWp").val(); var formurl = $("#fbglajxurl").val(); $(".btn").prop("disabled", true); btn.addClass("loading"); $("#RrqLawLYDR").html(''); $.post(formurl, { prekey: 'UAVAnPkgsY', fphnnum: axfunum }, function (data) {
            if (data === 'GO') { window.location.replace('/my/login'); } else { $("#RrqLawLYDR").html(data); }
            $(".btn").prop("disabled", false); btn.removeClass("loading");
        });
    }); $("#lgtypego").click(function () {
        event.preventDefault(); var lgbtn = $(this); lgbtn.prop("disabled", true); lgbtn.html('<i class="fa-solid fa-fan spin"></i>'); $("#cukXOmHAgC").html(''); $.post('/auth/conn/login-with-phone.php', { prekey: 'NqbEsjofQh', phnnum: $("#loginphonein").val(), captcha: $("#logincaptchain").val(), captchatoken: $("#logincapthtkn").val() }, function (data) {
            if (data === 'NEXT') { lgbtn.parent().removeClass("first"); lgbtn.parent().addClass("second"); } else if (data === 'WRONGCAP') { $("#cukXOmHAgC").html('<span class="result red">à¦‰à¦ªà¦°à§‡à¦° à¦•à§‹à¦¡à¦Ÿà¦¿ à¦¸à¦ à¦¿à¦• à¦¹à§Ÿà¦¨à¦¿</span>'); $("#logincaptchain").val(''); $.get("/auth/ajax.php?newcaptcha=" + Math.random(), function (data) { $("#logincapthtkn").val(data); $("#YhbfdmYQND img").attr("src", 'https://bondipathshala.com.bd/auth/captcha.php?token=' + data); }); } else { $("#cukXOmHAgC").html(data); }
            lgbtn.prop("disabled", false); lgbtn.html('GO');
        });
    }); $("#lgtypegotp").click(function () {
        event.preventDefault(); var lgbtn = $(this); lgbtn.prop("disabled", true); lgbtn.html('<i class="fa-solid fa-fan spin"></i>'); $("#cukXOmHAgC").html(''); $.post('/auth/conn/login-with-phone.php', { prekey: 'DIwVEVotse', phnnum: $("#loginphonein").val(), phnotp: $("#loginotpin").val() }, function (data) {
            if (data === 'OK') { window.location.replace("/my/login"); } else if (data === 'NEW') { window.location.replace("/auth/conn/login-with-phone.php?NEW"); } else { $("#cukXOmHAgC").html(data); }
            lgbtn.prop("disabled", false); lgbtn.html('GO');
        });
    }); $(".watchli").click(function () {
        $(".watchli").removeClass("active"); $(this).addClass("active"); var videoid = $(this).attr("data-vid"); var videotpe = $(this).attr("data-vit"); var clid = $(this).attr("data-clid"); var prd_w = $("#classvidctr").outerWidth(); var rndVdX = Math.floor(Math.random() * 100000); 
        if (videotpe == 3) { $("#classvidctr").html('<img src="/files/blackloading.jpg" style="width:100%"/>'); $.getJSON("getvideo?class_id=" + clid, function (data) { if (data.stat == 'ok') { $("#classvidctr").html('<video id="main-player' + rndVdX + '" oncontextmenu="return false;" class="video-js" width="' + prd_w + '"> <source src="' + data.uri + '" type="video/mp4" /> </video><script> videojs("main-player' + rndVdX + '", { controls: true, controlBar: { pictureInPictureToggle: false }, playbackRates: [0.5, 1, 1.5, 2], preload: "auto", aspectRatio: "16:9"}); </script>'); } else if (data.stat === 'go') { window.location.replace(data.uri); } else { console.log(data); } }); } 
        else if (videotpe == 2) { $("#classvidctr").html('<iframe allowfullscreen="" src="https://www.youtube.com/embed/' + videoid + '?autoplay=0&showinfo=0" frameborder="0"></iframe>'); } 
        else if (videotpe == 1) { $("#classvidctr").html('<iframe allowfullscreen="" src="https://player.vimeo.com/video/' + videoid + '?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t="></iframe>'); }
        var notename = $(this).attr('data-nname'); var notelink = $(this).attr('data-npdf'); if (typeof notename !== 'undefined' && notename !== false) { $("#classvidctr").append('<a href="https://bondipathshala.com.bd/pdf/' + notelink + '" target="_blank" download><span class="dashnotesp">Note</span>  ' + notename + ' </a>'); }
        var tmozname = $(this).attr('data-tmozn'); var tmozlink = $(this).attr('data-tmozl'); if (typeof tmozname !== 'undefined' && tmozname !== false) { $("#classvidctr").append('<a href="' + tmozlink + '" target="_blank"><span class="dashexamsp">Exam</span> ' + tmozname + '</a'); }
    }); $("#YhbfdmYQND i").click(function () {
        var chngbtn = $(this); var chngimg = $("#YhbfdmYQND img"); $("#cukXOmHAgC").html(''); chngbtn.addClass("spin"); $.get("/auth/ajax.php?newcaptcha=" + Math.random(), function (data) {
            $("#logincapthtkn").val(data); $("#logincaptchain").val(''); var newSrc = 'https://bondipathshala.com.bd/auth/captcha.php?token=' + data, imagechx = new Image(); imagechx.onload = function () { chngimg.hide("puff", function () { $(this).attr("src", newSrc).show("fold"); chngbtn.removeClass("spin"); }); }
            imagechx.src = newSrc;
        });
    }); $(".ajaxusubmit").click(function () {
        var btn = $(this); var form = $(this).closest("form"); var formdata = new FormData(form[0]); var action = form.attr("data-action"); var errdiv = $("#" + form.attr("data-errid")); errdiv.html(''); btn.prop("disabled", true); btn.addClass("dashloading"); $.ajax({
            type: "POST", url: action, data: formdata, processData: false, contentType: false, cache: false, timeout: 60000, dataType: "JSON", success: function (data) {
                if (data.stat == 'ok') { errdiv.html(data.ok); form.trigger("reset"); } else if (data.stat == 'go') { window.location.replace(data.uri); } else if (data.stat == 'err') { errdiv.html(data.err); } else { console.log(data); }
                btn.prop("disabled", false); btn.removeClass("dashloading");
            }
        });
    }); $("#lgtypegox").click(function () {
        event.preventDefault(); var lgbtn = $(this); lgbtn.prop("disabled", true); lgbtn.addClass("dashloading"); $("#JeQolPnGSK").html(''); $.post('/auth/conn/login-with-phone.php', { prekey: 'SNmegaoGaB', phnnum: $("#loginphonein").val(), captcha: $("#logincaptchain").val(), captchatoken: $("#logincapthtkn").val() }, function (data) {
            if (data === 'NEXT') { lgbtn.parent().removeClass("first"); lgbtn.parent().addClass("second"); } else if (data === 'WRONGCAP') { $("#JeQolPnGSK").html('<span class="result red">à¦‰à¦ªà¦°à§‡à¦° à¦•à§‹à¦¡à¦Ÿà¦¿ à¦¸à¦ à¦¿à¦• à¦¹à§Ÿà¦¨à¦¿</span>'); $("#logincaptchain").val(''); $.get("/auth/ajax.php?newcaptcha=" + Math.random(), function (data) { $("#logincapthtkn").val(data); $("#YhbfdmYQND img").attr("src", 'https://bondipathshala.com.bd/auth/captcha.php?token=' + data); }); } else { $("#JeQolPnGSK").html(data); }
            lgbtn.prop("disabled", false); lgbtn.removeClass("dashloading");
        });
    }); $("#sUECFgnNYI").click(function () { $(".edtprfirst").hide(); $(".edtprsecond").show(); $.get("/auth/ajax.php?newcaptcha=" + Math.random(), function (data) { $("#logincapthtkn").val(data); $("#YhbfdmYQND img").attr("src", 'https://bondipathshala.com.bd/auth/captcha.php?token=' + data); }); }); $("#HgXuWlpBsw").click(function () { $(".edtprsecond").hide(); $(".edtprfirst").show(); }); $("#RQZeN .fa-xmark").click(function () { $("#RQZeN").remove(); });
});
