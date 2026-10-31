var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/locales/zh-CN.yml
var require_zh_CN = __commonJS({
  "src/locales/zh-CN.yml"(exports2, module2) {
    module2.exports = [{ $description: "\u5E38\u91CF\u8BBE\u7F6E", constants: { $description: "\u5E38\u91CF\u5217\u8868 (\u300C\u5BF9\u5E94\u89C4\u5219\u300D\u4E2D\u7684\u53C2\u6570)", $value: { $description: "\u5E38\u91CF\u540D\u79F0 (\u53EF\u968F\u610F\u586B\u5199)", $value: [{ type: { $description: "\u5E38\u91CF\u7C7B\u578B", $value: ["\u4EC5\u9002\u7528\u300C\u6765\u6E90\u300D", "\u4EC5\u9002\u7528\u300C\u76EE\u6807\u300D", "\u9002\u7528\u300C\u6765\u6E90\u300D\u6216\u300C\u76EE\u6807\u300D(\u901A\u5E38\u7528\u4EE5\u53CC\u5411\u8F6C\u53D1)"] } }, [{ name: "\u6765\u6E90\u4EE3\u79F0 (\u53EF\u968F\u610F\u586B\u5199)", blockingWords: { $description: "\u5C4F\u853D\u8BCD (\u6D88\u606F\u5305\u542B\u5C4F\u853D\u8BCD\u65F6\u4E0D\u8F6C\u53D1, \u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F)", $value: "\u6B63\u5219\u8868\u8FBE\u5F0F (\u65E0\u9700\u659C\u6760\u5305\u56F4)" }, platform: "\u5E73\u53F0\u540D", channelId: "\u9891\u9053 ID", selfId: "\u81EA\u8EAB ID", onlyQuote: "\u662F\u5426\u4EC5\u8F6C\u53D1\u5F15\u7528\u673A\u5668\u4EBA\u81EA\u8EAB\u7684\u6D88\u606F" }, { selfId: "\u81EA\u8EAB ID", disabled: "\u662F\u5426\u7981\u7528", platform: "\u5E73\u53F0\u540D", channelId: "\u9891\u9053 ID", simulateOriginal: "\u6A21\u62DF\u539F\u59CB\u4F5C\u8005 (\u4EC5\u5728 discord \u5E73\u53F0\u751F\u6548)", hidePrefix: "\u662F\u5426\u9690\u85CF\u53D1\u9001\u7684\u524D\u7F00" }, { name: "\u6765\u6E90\u4EE3\u79F0 (\u53EF\u968F\u610F\u586B\u5199)", selfId: "\u81EA\u8EAB ID", blockingWords: { $description: "\u5C4F\u853D\u8BCD (\u6D88\u606F\u5305\u542B\u5C4F\u853D\u8BCD\u65F6\u4E0D\u8F6C\u53D1, \u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F)" }, disabled: "\u662F\u5426\u7981\u7528 (\u4EC5\u5728\u300C\u76EE\u6807\u300D\u751F\u6548)", platform: "\u5E73\u53F0\u540D", channelId: "\u9891\u9053 ID", simulateOriginal: "\u6A21\u62DF\u539F\u59CB\u4F5C\u8005 (\u4EC5\u5728 discord \u5E73\u53F0\u751F\u6548, \u4EC5\u5728\u300C\u76EE\u6807\u300D\u751F\u6548)", onlyQuote: "\u662F\u5426\u4EC5\u8F6C\u53D1\u5F15\u7528\u673A\u5668\u4EBA\u81EA\u8EAB\u7684\u6D88\u606F", hidePrefix: "\u662F\u5426\u9690\u85CF\u53D1\u9001\u7684\u524D\u7F00" }]] } } }, { $description: "\u8F6C\u53D1\u89C4\u5219\u8BBE\u7F6E", rules: { $description: "\u5BF9\u5E94\u89C4\u5219", $value: { source: "\u6765\u6E90 (\u6B64\u5904\u586B\u5165\u300C\u5E38\u91CF\u540D\u79F0\u300D)", targets: "\u76EE\u6807 (\u6B64\u5904\u586B\u5165\u300C\u5E38\u91CF\u540D\u79F0\u300D)" } }, delay: { $description: "\u53D1\u9001\u95F4\u9694 (\u9ED8\u8BA4 200 \u6BEB\u79D2)", $value: "\u5E73\u53F0\u540D" } }];
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Config: () => Config,
  apply: () => apply,
  inject: () => inject,
  name: () => name,
  usage: () => usage
});
module.exports = __toCommonJS(src_exports);

// src/config.ts
var import_koishi = require("koishi");
var share = {
  platform: import_koishi.Schema.string().required(),
  channelId: import_koishi.Schema.string().required()
};
var sourceConst = import_koishi.Schema.object({
  type: import_koishi.Schema.const("source").required(),
  name: import_koishi.Schema.string(),
  ...share,
  selfId: import_koishi.Schema.string().default("*"),
  blockingWords: import_koishi.Schema.array(String).role("table").default([]),
  onlyQuote: import_koishi.Schema.boolean().default(false)
});
var targetConst = import_koishi.Schema.object({
  type: import_koishi.Schema.const("target").required(),
  ...share,
  selfId: import_koishi.Schema.string().required(),
  simulateOriginal: import_koishi.Schema.boolean().default(false),
  hidePrefix: import_koishi.Schema.boolean().default(false),
  disabled: import_koishi.Schema.boolean().default(false)
});
var fullConst = import_koishi.Schema.object({
  type: import_koishi.Schema.const("full").required(),
  name: import_koishi.Schema.string(),
  ...share,
  selfId: import_koishi.Schema.string().required(),
  blockingWords: import_koishi.Schema.array(String).role("table").default([]),
  simulateOriginal: import_koishi.Schema.boolean().default(false),
  onlyQuote: import_koishi.Schema.boolean().default(false),
  hidePrefix: import_koishi.Schema.boolean().default(false),
  disabled: import_koishi.Schema.boolean().default(false)
});
var Config = import_koishi.Schema.intersect([
  import_koishi.Schema.object({
    constants: import_koishi.Schema.dict(import_koishi.Schema.intersect([
      import_koishi.Schema.object({
        type: import_koishi.Schema.union([
          import_koishi.Schema.const("source"),
          import_koishi.Schema.const("target"),
          import_koishi.Schema.const("full")
        ]).role("radio").required()
      }),
      import_koishi.Schema.union([
        sourceConst,
        targetConst,
        fullConst
      ])
    ])).collapse(true)
  }),
  import_koishi.Schema.object({
    rules: import_koishi.Schema.array(import_koishi.Schema.object({
      source: import_koishi.Schema.string().required(),
      targets: import_koishi.Schema.array(String).role("table")
    })),
    delay: import_koishi.Schema.dict(import_koishi.Schema.natural().role("ms").default(0.2 * import_koishi.Time.second))
  })
]).i18n({
  "zh-CN": require_zh_CN()
});

// src/core.ts
var import_koishi2 = require("koishi");
var IDENTIFIER_TYPE = "string(255)";
function transform(platform, source, rules) {
  return import_koishi2.h.transformAsync(source, {
    at(attrs) {
      let name2 = attrs.name || attrs.id;
      if (platform === "discord" && attrs.type === "all") {
        name2 = "everyone\n";
      }
      return import_koishi2.h.text(`@${name2}`);
    },
    face(attrs) {
      const name2 = attrs.name || "\u8868\u60C5";
      return import_koishi2.h.text(`[${name2}]`);
    },
    audio(attrs) {
      return import_koishi2.h.text("[\u8BED\u97F3]");
    },
    ...rules
  });
}
function relativeTime(date) {
  const now = Date.now();
  const diff = date - now;
  const abs = Math.abs(diff);
  const seconds = Math.floor(abs / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (diff > 0) {
    if (days > 0) return `${days}\u5929\u5185`;
    if (hours > 0) return `${hours}\u5C0F\u65F6\u5185`;
    if (minutes > 0) return `${minutes}\u5206\u949F\u5185`;
    return `${seconds}\u79D2\u5185`;
  } else {
    if (days > 0) return `${days}\u5929\u524D`;
    if (hours > 0) return `${hours}\u5C0F\u65F6\u524D`;
    if (minutes > 0) return `${minutes}\u5206\u949F\u524D`;
    return `${seconds}\u79D2\u524D`;
  }
}
function apply(ctx, config) {
  ctx.model.extend("myrtus_forward_sent", {
    id: "unsigned",
    time: "timestamp",
    from: IDENTIFIER_TYPE,
    to: IDENTIFIER_TYPE,
    from_sid: IDENTIFIER_TYPE,
    to_sid: IDENTIFIER_TYPE,
    from_channel_id: IDENTIFIER_TYPE,
    to_channel_id: IDENTIFIER_TYPE
  }, {
    autoInc: true
  });
  const { logger } = ctx;
  for (const rule of config.rules) {
    const sConfig = config.constants[rule.source];
    if (!sConfig) continue;
    const targetConfigs = [];
    for (const target of rule.targets) {
      const targetConfig = config.constants[target];
      if (targetConfig && !targetConfig.disabled) {
        targetConfigs.push(targetConfig);
      }
    }
    if (targetConfigs.length === 0) {
      continue;
    }
    let listened = ctx.platform(sConfig.platform);
    if (sConfig.selfId !== "*") listened = listened.self(sConfig.selfId);
    if (sConfig.channelId !== "*") listened = listened.channel(sConfig.channelId);
    listened.on("message-created", async (session) => {
      const { event, sid } = session;
      if (session.platform === "discord" && session.userId === session.selfId) {
        return;
      }
      for (const regexpStr of sConfig.blockingWords) {
        const reg = new RegExp(regexpStr);
        const hit = session.elements.some((v) => {
          if (v.type === "text") {
            return reg.test(v.attrs.content);
          }
          return false;
        });
        if (hit) return;
      }
      let rows = [];
      const { quote } = event.message;
      let quoteUser = quote?.user ?? quote?.member?.user;
      let quoteIsSelf = false;
      if (quote) {
        if (!quoteUser && quote.id && typeof session.bot.getMessage === "function") {
          try {
            quoteUser = (await session.bot.getMessage(session.channelId, quote.id))?.user;
          } catch (error) {
            logger.debug("cannot fetch quoted message: %s", error);
          }
        }
        quoteIsSelf = event.selfId === quoteUser?.id;
        if (quote.id && (quoteIsSelf || !quoteUser?.id)) {
          rows = await ctx.database.get("myrtus_forward_sent", {
            to: quote.id,
            to_sid: sid,
            to_channel_id: event.channel.id
          });
          if (rows.length) quoteIsSelf = true;
        }
        if (sConfig.onlyQuote && (!quoteIsSelf || !rows.length)) return;
        if (quote.id && !quoteIsSelf) {
          rows = await ctx.database.get("myrtus_forward_sent", {
            from: quote.id,
            from_sid: sid,
            from_channel_id: event.channel.id
          });
        }
        logger.debug("%C", "=== inspect quote ===");
        logger.debug(`from sid: ${sid}`);
      } else if (sConfig.onlyQuote) {
        return;
      }
      const filtered = await transform(session.platform, event.message.elements, {
        at(attrs) {
          if (sConfig.onlyQuote && attrs.id === event.selfId) {
            return import_koishi2.h.text("");
          }
          let name2 = attrs.name || attrs.id;
          if (session.platform === "discord" && attrs.type === "all") {
            name2 = "everyone\n";
          }
          return import_koishi2.h.text(`@${name2}`);
        },
        async img(attrs) {
          if (session.platform === "discord") {
            const res = await ctx.http(attrs.src, { responseType: "arraybuffer" });
            return import_koishi2.h.img(res.data, res.headers.get("Content-Type"));
          }
          return (0, import_koishi2.h)("img", attrs);
        }
      });
      if (session.platform === "discord") {
        for (const embed of session.event._data.d.embeds) {
          const buffer = [];
          if (embed.title) {
            buffer.push(embed.title);
          }
          if (embed.description) {
            buffer.push(embed.description);
          }
          filtered.push(import_koishi2.h.text(buffer.join("\n")));
        }
        for (const element of filtered) {
          if (element.type === "text") {
            element.attrs.content = element.attrs.content.replace(
              /<t:(\d+):([a-zA-Z])\/?>/g,
              (match, timestamp, format) => {
                if (format === "F" || format === "f") {
                  const date = new Date(+timestamp * 1e3);
                  const options = {
                    timeZone: "Asia/Shanghai",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric"
                  };
                  const locale = Object.keys(Object.values(ctx.root.i18n.locales)[0])[0];
                  return date.toLocaleString(locale, options);
                } else if (format === "R") {
                  return relativeTime(+timestamp * 1e3);
                } else if (format === "S") {
                  const date = new Date(+timestamp * 1e3);
                  const options = {
                    timeZone: "Asia/Shanghai"
                  };
                  const locale = Object.keys(Object.values(ctx.root.i18n.locales)[0])[0];
                  return date.toLocaleString(locale, options);
                } else {
                  return match;
                }
              }
            );
          }
        }
      }
      const sent = [];
      for (let index = 0; index < targetConfigs.length; index++) {
        const target = targetConfigs[index];
        const targetSid = `${target.platform}:${target.selfId}`;
        const bot = ctx.bots[targetSid];
        if (!bot) {
          logger.warn(`\u6682\u65F6\u627E\u4E0D\u5230\u673A\u5668\u4EBA\u5B9E\u4F8B %c, \u7B49\u5F85\u4E00\u4F1A\u513F\u8BF4\u4E0D\u5B9A\u5C31\u6709\u4E86\u5462!`, targetSid);
          continue;
        }
        if (bot.status !== import_koishi2.Universal.Status.ONLINE) {
          logger.warn(`\u673A\u5668\u4EBA\u5B9E\u4F8B %c \u5904\u4E8E\u975E\u5728\u7EBF\u72B6\u6001\uFF0C\u53EF\u80FD\u4E0E\u7F51\u7EDC\u73AF\u5883\u6709\u5173\u3002`, targetSid);
          continue;
        }
        let prefix;
        if (target.simulateOriginal && target.platform === "discord") {
          let avatar = event.user.avatar;
          if (event.platform === "telegram") {
            avatar = "https://discord.com/assets/5d6a5e9d7d77ac29116e.png";
          }
          prefix = (0, import_koishi2.h)("author", {
            name: `[${sConfig.name ?? ""}] ${session.username}`,
            avatar
          });
        } else if (!target.hidePrefix) {
          const altName = sConfig.name ? `${sConfig.name} - ` : "";
          prefix = import_koishi2.h.text(`[${altName}${session.username}]
`);
        }
        const delay = config.delay[target.platform] ?? 200;
        if (index) await ctx.sleep(delay);
        const payload = prefix ? [prefix, ...filtered] : [...filtered];
        if (event.message.quote) {
          let quoteId;
          if (quoteIsSelf) {
            logger.debug("selfId = quote.userId");
            const row = rows.find((v) => v.from_sid === targetSid && v.from_channel_id === target.channelId);
            if (row) {
              quoteId = row.from;
              logger.debug(`channelId: ${row.from_channel_id}`);
            }
          } else {
            logger.debug("selfId != quote.userId");
            const row = rows.find((v) => v.to_sid === targetSid && v.to_channel_id === target.channelId);
            if (row) {
              quoteId = row.to;
              logger.debug(`channelId: ${row.to_channel_id}`);
            }
          }
          if (quoteId) {
            if (payload[0]?.type === "author") {
              payload.splice(1, 0, import_koishi2.h.quote(quoteId));
            } else {
              payload.unshift(import_koishi2.h.quote(quoteId));
            }
            logger.debug(`msgId: ${quoteId}`);
            logger.debug(`quote added`);
          } else {
            const { user, elements = [], member } = event.message.quote;
            const name2 = member?.nick || user?.nick || user?.name || quoteUser?.nick || quoteUser?.name || quoteUser?.id || "\u672A\u77E5\u7528\u6237";
            payload.unshift(import_koishi2.h.text(`Re ${name2} \u2308`), ...await transform(session.platform, elements), import_koishi2.h.text("\u230B\n"));
            logger.debug("quote not added");
          }
          logger.debug(`to sid: ${targetSid}`);
        }
        try {
          const messageIds = await bot.sendMessage(target.channelId, payload);
          for (const msgId of messageIds) {
            sent.push({
              from: event.message.id,
              from_sid: `${event.platform}:${event.selfId}`,
              to: msgId,
              to_sid: targetSid,
              from_channel_id: event.channel.id,
              to_channel_id: target.channelId,
              time: /* @__PURE__ */ new Date()
            });
          }
        } catch (error) {
          logger.error(error);
        }
      }
      if (sent.length !== 0) {
        ctx.database.upsert("myrtus_forward_sent", sent);
      }
    });
  }
}

// src/index.ts
var name = "forward";
var inject = ["database", "http"];
var usage = `
\u8FD9\u662F\u7528\u4E8E\u5728\u4E0D\u540C\u7FA4\u7EC4\u95F4\u8F6C\u53D1\u6D88\u606F\u7684\u63D2\u4EF6\u3002

\u5165\u95E8\u6559\u7A0B<a href="https://github.com/bot-myrtus/forward?tab=readme-ov-file#%E8%AE%BE%E5%AE%9A%E6%B6%88%E6%81%AF%E8%BD%AC%E5%8F%91%E8%A7%84%E5%88%99" target="_blank">\u70B9\u6B64\u67E5\u9605</a>\uFF0C\u5982\u6709\u7591\u95EE\u53EF<a href="https://github.com/bot-myrtus/forward/issues/new" target="_blank">\u63D0\u4EA4 issue</a>\u3002
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Config,
  apply,
  inject,
  name,
  usage
});
