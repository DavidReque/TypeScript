"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomeSchema = exports.ItemSchema = exports.LicenseSchema = exports.OwnerSchema = exports.VisibilitySchema = exports.TypeSchema = exports.LanguageSchema = exports.DefaultBranchSchema = void 0;
const z = __importStar(require("zod"));
exports.DefaultBranchSchema = z.enum([
    "dev",
    "main",
    "master",
]);
exports.LanguageSchema = z.enum([
    "HTML",
    "JavaScript",
    "Objective-C",
    "TypeScript",
]);
exports.TypeSchema = z.enum([
    "Organization",
    "User",
]);
exports.VisibilitySchema = z.enum([
    "public",
]);
exports.OwnerSchema = z.object({
    "login": z.string(),
    "id": z.number(),
    "node_id": z.string(),
    "avatar_url": z.string(),
    "gravatar_id": z.string(),
    "url": z.string(),
    "html_url": z.string(),
    "followers_url": z.string(),
    "following_url": z.string(),
    "gists_url": z.string(),
    "starred_url": z.string(),
    "subscriptions_url": z.string(),
    "organizations_url": z.string(),
    "repos_url": z.string(),
    "events_url": z.string(),
    "received_events_url": z.string(),
    "type": exports.TypeSchema,
    "site_admin": z.boolean(),
});
exports.LicenseSchema = z.object({
    "key": z.string(),
    "name": z.string(),
    "spdx_id": z.string(),
    "url": z.union([z.null(), z.string()]),
    "node_id": z.string(),
});
exports.ItemSchema = z.object({
    "id": z.number(),
    "node_id": z.string(),
    "name": z.string(),
    "full_name": z.string(),
    "private": z.boolean(),
    "owner": exports.OwnerSchema,
    "html_url": z.string(),
    "description": z.union([z.null(), z.string()]),
    "fork": z.boolean(),
    "url": z.string(),
    "forks_url": z.string(),
    "keys_url": z.string(),
    "collaborators_url": z.string(),
    "teams_url": z.string(),
    "hooks_url": z.string(),
    "issue_events_url": z.string(),
    "events_url": z.string(),
    "assignees_url": z.string(),
    "branches_url": z.string(),
    "tags_url": z.string(),
    "blobs_url": z.string(),
    "git_tags_url": z.string(),
    "git_refs_url": z.string(),
    "trees_url": z.string(),
    "statuses_url": z.string(),
    "languages_url": z.string(),
    "stargazers_url": z.string(),
    "contributors_url": z.string(),
    "subscribers_url": z.string(),
    "subscription_url": z.string(),
    "commits_url": z.string(),
    "git_commits_url": z.string(),
    "comments_url": z.string(),
    "issue_comment_url": z.string(),
    "contents_url": z.string(),
    "compare_url": z.string(),
    "merges_url": z.string(),
    "archive_url": z.string(),
    "downloads_url": z.string(),
    "issues_url": z.string(),
    "pulls_url": z.string(),
    "milestones_url": z.string(),
    "notifications_url": z.string(),
    "labels_url": z.string(),
    "releases_url": z.string(),
    "deployments_url": z.string(),
    "created_at": z.string(),
    "updated_at": z.string(),
    "pushed_at": z.string(),
    "git_url": z.string(),
    "ssh_url": z.string(),
    "clone_url": z.string(),
    "svn_url": z.string(),
    "homepage": z.union([z.null(), z.string()]),
    "size": z.number(),
    "stargazers_count": z.number(),
    "watchers_count": z.number(),
    "language": z.union([exports.LanguageSchema, z.null()]),
    "has_issues": z.boolean(),
    "has_projects": z.boolean(),
    "has_downloads": z.boolean(),
    "has_wiki": z.boolean(),
    "has_pages": z.boolean(),
    "has_discussions": z.boolean(),
    "forks_count": z.number(),
    "mirror_url": z.null(),
    "archived": z.boolean(),
    "disabled": z.boolean(),
    "open_issues_count": z.number(),
    "license": z.union([exports.LicenseSchema, z.null()]),
    "allow_forking": z.boolean(),
    "is_template": z.boolean(),
    "web_commit_signoff_required": z.boolean(),
    "topics": z.array(z.string()),
    "visibility": exports.VisibilitySchema,
    "forks": z.number(),
    "open_issues": z.number(),
    "watchers": z.number(),
    "default_branch": exports.DefaultBranchSchema,
    "score": z.number(),
});
exports.WelcomeSchema = z.object({
    "total_count": z.number(),
    "incomplete_results": z.boolean(),
    "items": z.array(exports.ItemSchema),
});
const API_URL = 'https://api.github.com/search/repositories?q=javascript';
const res = await fetch(API_URL);
if (!res.ok) {
    throw new Error('Request failded');
}
const data = await res.json();
const repos = data.items.map((item) => {
    console.log(item);
});
