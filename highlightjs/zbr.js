export default function (hljs) {
  return {
    name: "ZBR",
    aliases: ["zbr"],
    case_insensitive: false,
    contains: [
      hljs.COMMENT("//", "$"),

      // ZBR_BRACKETLESS_START
      {
        match: /\b(Z)(afkChannelID|afkTimeout|allMembersCount|allowRoleMentions|allowUserMentions|appEmojis|auditCount|auditEntries|auditEntryAction|auditEntryChanges|auditEntryID|auditEntryReason|auditEntryTarget|auditEntryUser|auditLatest|automodRules|boostCount|boostLevel|botCommands|botID|botOwnerID|botTyping|capsDetect|categoryCount|changeCooldownTime|channelCount|channelCreated|channelExists|channelID|channelInvites|channelName|channelNames|channelPosition|channelTopic|channelType|channelWebhooks|colorRandom|commandName|commandsCount|commandTrigger|creationDate|currentShard|customID|date|day|defer|displayName|dmChannelID|duplicateDetect|emojiSpamDetect|emoteCount|entitlements|ephemeral|error|eval|eventCount|executionTime|getAttachments|getCooldown|getMentionableSelectUserCount|getMentionableSelectUserIDs|getRoleSelectRoleCount|getRoleSelectRoleIDs|getSlowmode|getTextSplitIndex|getTextSplitLength|getTimestamp|getUserSelectUserCount|getUserSelectUserIDs|guildBanner|guildExists|guildID|highestRole|hour|httpResult|httpStatus|isAdmin|isBooster|isBot|isHoisted|isInVoice|isMentionable|isMentioned|isModerator|isNSFW|isSlash|isTimedOut|isUserDMEnabled|joinSplitText|jsonClear|jsonPretty|jsonStringify|lastMessageID|lastPinTimestamp|listVar|loopIndex|loopValue|lowestRole|memberPending|membersCount|mentionSpamDetect|message|messageID|minute|month|onboardingDefaultChannels|onboardingEnabled|onboardingMode|onboardingPrompts|onlyAdmin|onlyNSFW|parentID|ping|pinList|pollSend|randomCategoryID|randomChannelID|randomGuildID|randomMention|randomRoleID|randomUser|randomUserID|removeAllComponents|removeButtons|repliedMessageID|reply|roleColor|roleCount|roleExists|roleID|roleMemberCount|roleMembers|roleName|roleNames|rolePerms|rolePosition|rulesChannelID|second|serverChannels|serverCount|serverDescription|serverDiscoverySplash|serverEmojis|serverEvents|serverIcon|serverInvite|serverModify|serverName|serverNames|serverOwner|serverRoles|serverSplash|serverStickers|serverTemplates|serverVerificationLevel|skus|slashCommandsCount|slashID|soundboardDefaultSounds|soundboardSounds|stickerCount|stop|suppressErrors|systemChannelID|textSplit|threadArchived|threadLocked|threadParentID|time|timestamp|totalShards|untimeOut|update|uptime|userAvatar|userBadge|userBanner|userBannerColor|userExists|userID|userJoined|userLocale|username|userPerms|userRoles|userSelfDeafened|userSelfMuted|userServerAvatar|userServerDeafened|userServerMuted|userStatus|userStreaming|userVoiceChannel|uuid|voiceBitrate|voiceEmpty|voiceFull|voiceMemberCount|voiceMembers|voiceNew|voiceOld|voiceUserLimit|welcomeScreen|year)\b(?!\{)/,
        scope: "keyword",
        relevance: 10,
      },
      // ZBR_BRACKETLESS_END

      {
        match: /(Z)([a-zA-Z_][a-zA-Z0-9_]*)(\{)/,
        scope: {
          1: "keyword",
          2: "title.function",
          3: "punctuation",
        },
        relevance: 10,
      },

      {
        match: /(onInteraction)(?=\{)/,
        scope: { 1: "tag" },
      },

      {
        match: /on[a-zA-Z0-9_]+/,
        scope: "tag",
      },

      {
        match: /^#(name|trigger|description|type|scope|option)\b/,
        scope: "keyword",
        relevance: 10,
      },

      { scope: "punctuation", match: /\{|\}/ },

      { scope: "keyword", match: /==|!=|>=|<=|>|<|\&\&|\|\||;/ },

      { scope: "string.escape", match: /\\[{};\\]/ },
    ],
  };
}
