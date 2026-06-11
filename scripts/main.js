function setCurrentDate() {
  const dateTargets = document.querySelectorAll("#currentDate");
  if (!dateTargets.length) return;

  const now = new Date();
  const text = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][now.getDay()]}`;
  dateTargets.forEach((node) => {
    node.textContent = text;
  });
}

function setupLoginForm() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  const message = document.getElementById("loginMessage");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (username.length > 10) {
      message.textContent = "用户名长度不能超过 10 个字符。";
      return;
    }

    if (!/^\d{6}$/.test(password)) {
      message.textContent = "密码必须是 6 位数字。";
      return;
    }

    if (username === "html5kc" && password === "123456") {
      message.textContent = "登录成功，正在进入首页...";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 700);
      return;
    }

    message.textContent = "用户名或密码错误，请使用指定测试账号。";
  });
}

function setupRegisterForm() {
  const form = document.getElementById("registerForm");
  if (!form) return;

  const message = document.getElementById("registerMessage");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      message.textContent = "请先完整并正确填写注册信息。";
      form.reportValidity();
      return;
    }

    const password = form.regPassword.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();
    const hobbies = [...form.querySelectorAll('input[name="hobby"]:checked')];

    if (password !== confirmPassword) {
      message.textContent = "两次输入的密码不一致。";
      return;
    }

    if (hobbies.length < 3) {
      message.textContent = "请至少选择 3 项个人兴趣。";
      return;
    }

    message.textContent = "注册信息验证通过，演示项目中无需真正提交到服务器。";
  });

  form.addEventListener("reset", () => {
    setTimeout(() => {
      message.textContent = "表单已重置。";
    }, 0);
  });
}

function setupFeatureTabs() {
  const links = document.querySelectorAll(".feature-link");
  if (!links.length) return;

  const panels = document.querySelectorAll(".feature-view");
  links.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.feature;
      links.forEach((item) => item.classList.toggle("active", item === button));
      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.featurePanel === target);
      });
    });
  });
}

function setupThemeTabs() {
  const links = document.querySelectorAll(".theme-link");
  if (!links.length) return;

  const panels = document.querySelectorAll(".theme-panel");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.dataset.theme;
      links.forEach((item) => item.classList.toggle("active", item === link));
      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.themePanel === target);
      });
    });
  });
}

function setupMediaControls() {
  const video = document.getElementById("travelVideo");
  if (!video) return;

  const status = document.getElementById("mediaStatus");
  const volume = document.getElementById("volumeControl");
  const buttons = document.querySelectorAll(".media-controls button");
  video.volume = 0.7;

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const action = button.dataset.action;
      try {
        if (action === "play") {
          await video.play();
          status.textContent = "视频正在播放。";
        } else if (action === "pause") {
          video.pause();
          status.textContent = "视频已暂停。";
        } else if (action === "forward") {
          video.currentTime = Math.min(video.duration || Infinity, video.currentTime + 5);
          status.textContent = "已快进 5 秒。";
        } else if (action === "backward") {
          video.currentTime = Math.max(0, video.currentTime - 5);
          status.textContent = "已快退 5 秒。";
        }
      } catch (error) {
        status.textContent = "媒体资源加载失败，请检查网络或更换本地视频。";
      }
    });
  });

  if (volume) {
    volume.addEventListener("input", () => {
      video.volume = Number(volume.value);
      status.textContent = `当前音量：${Math.round(video.volume * 100)}%`;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setCurrentDate();
  setupLoginForm();
  setupRegisterForm();
  setupFeatureTabs();
  setupThemeTabs();
  setupMediaControls();
});
