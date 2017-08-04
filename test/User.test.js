/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('chai').use(require('sinon-chai'));
const nock = require('nock');
const User = require('../src/models/User');

describe('User model', () => {
  const user = new User({ name: 'michaelmurray6298' });

  it('constructor contains base url', () => {
    expect(user.base).to.equal('https://api.github.com/users/');
  });

  it('constructor accepts a passed in argument', () => {
    expect(user.username.name).to.equal('michaelmurray6298');
  });
  after((done) => {
    done();
  });
  it('fetchOrgs should return all the user orgs', async () => {
    const orgFetch = [
      {
        login: 'gSchool',
        id: 3484345,
        url: 'https://api.github.com/orgs/gSchool',
        repos_url: 'https://api.github.com/orgs/gSchool/repos',
        events_url: 'https://api.github.com/orgs/gSchool/events',
        hooks_url: 'https://api.github.com/orgs/gSchool/hooks',
        issues_url: 'https://api.github.com/orgs/gSchool/issues',
        members_url: 'https://api.github.com/orgs/gSchool/members{/member}',
        public_members_url:
     'https://api.github.com/orgs/gSchool/public_members{/member}',
        avatar_url: 'https://avatars1.githubusercontent.com/u/3484345?v=4',
        description: 'Home of all the Galvanize education repositories',
      },
      {
        login: 'mondoGroup',
        id: 29386798,
        url: 'https://api.github.com/orgs/mondoGroup',
        repos_url: 'https://api.github.com/orgs/mondoGroup/repos',
        events_url: 'https://api.github.com/orgs/mondoGroup/events',
        hooks_url: 'https://api.github.com/orgs/mondoGroup/hooks',
        issues_url: 'https://api.github.com/orgs/mondoGroup/issues',
        members_url: 'https://api.github.com/orgs/mondoGroup/members{/member}',
        public_members_url:
     'https://api.github.com/orgs/mondoGroup/public_members{/member}',
        avatar_url: 'https://avatars1.githubusercontent.com/u/29386798?v=4',
        description: null,
      },
      {
        login: 'ski-ski',
        id: 29638033,
        url: 'https://api.github.com/orgs/ski-ski',
        repos_url: 'https://api.github.com/orgs/ski-ski/repos',
        events_url: 'https://api.github.com/orgs/ski-ski/events',
        hooks_url: 'https://api.github.com/orgs/ski-ski/hooks',
        issues_url: 'https://api.github.com/orgs/ski-ski/issues',
        members_url: 'https://api.github.com/orgs/ski-ski/members{/member}',
        public_members_url:
     'https://api.github.com/orgs/ski-ski/public_members{/member}',
        avatar_url: 'https://avatars3.githubusercontent.com/u/29638033?v=4',
        description: null,
      },
    ];
    const userFetch = {
      login: 'michaelmurray6298',
      id: 24865792,
      avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/michaelmurray6298',
      html_url: 'https://github.com/michaelmurray6298',
      followers_url: 'https://api.github.com/users/michaelmurray6298/followers',
      following_url:
    'https://api.github.com/users/michaelmurray6298/following{/other_user}',
      gists_url:
    'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
      starred_url:
    'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
      subscriptions_url:
    'https://api.github.com/users/michaelmurray6298/subscriptions',
      organizations_url: 'https://api.github.com/users/michaelmurray6298/orgs',
      repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
      events_url:
    'https://api.github.com/users/michaelmurray6298/events{/privacy}',
      received_events_url:
    'https://api.github.com/users/michaelmurray6298/received_events',
      type: 'User',
      site_admin: false,
      name: 'Michael Murray',
      company: null,
      blog: '',
      location: null,
      email: 'michaelmurray6298@gmail.com',
      hireable: null,
      bio: null,
      public_repos: 20,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: '2017-01-01T19:17:16Z',
      updated_at: '2017-07-27T16:44:43Z',
      private_gists: 0,
      total_private_repos: 28,
      owned_private_repos: 0,
      disk_usage: 18833,
      collaborators: 0,
      two_factor_authentication: false,
      plan: {
        name: 'free',
        space: 976562499,
        collaborators: 0,
        private_repos: 0,
      },
    };
    nock('https://api.github.com')
      .get(`/users/michaelmurray6298?access_token=${process.env.TKN}`)
      .reply(200, userFetch);
    nock('https://api.github.com')
      .get(`/users/michaelmurray6298/orgs?access_token=${process.env.TKN}`)
      .reply(200, orgFetch);

    const userOrgs = await user.orgs;
    expect(userOrgs[0].org.id).to.equal(orgFetch[0].id);
  });
  after((done) => {
    done();
  });
  it('fetchUserRepo should return all the user repos', async () => {
    const repoFetch = [
      {
        id: 98671137,
        name: 'databraid-api-starter',
        full_name: 'michaelmurray6298/databraid-api-starter',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/databraid-api-starter',
        description: null,
        fork: true,
        url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/deployments',
        created_at: '2017-07-28T17:13:20Z',
        updated_at: '2017-07-28T17:13:21Z',
        pushed_at: '2017-07-27T20:16:40Z',
        git_url: 'git://github.com/michaelmurray6298/databraid-api-starter.git',
        ssh_url: 'git@github.com:michaelmurray6298/databraid-api-starter.git',
        clone_url:
     'https://github.com/michaelmurray6298/databraid-api-starter.git',
        svn_url: 'https://github.com/michaelmurray6298/databraid-api-starter',
        homepage: null,
        size: 33,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 94238565,
        name: 'express-router-lesson',
        full_name: 'michaelmurray6298/express-router-lesson',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/express-router-lesson',
        description: null,
        fork: true,
        url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/express-router-lesson/deployments',
        created_at: '2017-06-13T17:19:02Z',
        updated_at: '2017-06-13T17:19:03Z',
        pushed_at: '2017-06-13T06:17:42Z',
        git_url: 'git://github.com/michaelmurray6298/express-router-lesson.git',
        ssh_url: 'git@github.com:michaelmurray6298/express-router-lesson.git',
        clone_url:
     'https://github.com/michaelmurray6298/express-router-lesson.git',
        svn_url: 'https://github.com/michaelmurray6298/express-router-lesson',
        homepage: null,
        size: 2123,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 89170251,
        name: 'expressions-into-function',
        full_name: 'michaelmurray6298/expressions-into-function',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url:
     'https://github.com/michaelmurray6298/expressions-into-function',
        description: null,
        fork: true,
        url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/expressions-into-function/deployments',
        created_at: '2017-04-23T20:26:30Z',
        updated_at: '2017-04-23T20:26:31Z',
        pushed_at: '2016-01-19T20:33:48Z',
        git_url:
     'git://github.com/michaelmurray6298/expressions-into-function.git',
        ssh_url:
     'git@github.com:michaelmurray6298/expressions-into-function.git',
        clone_url:
     'https://github.com/michaelmurray6298/expressions-into-function.git',
        svn_url:
     'https://github.com/michaelmurray6298/expressions-into-function',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 90177051,
        name: 'fakeQuery',
        full_name: 'michaelmurray6298/fakeQuery',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/fakeQuery',
        description: null,
        fork: true,
        url: 'https://api.github.com/repos/michaelmurray6298/fakeQuery',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/fakeQuery/deployments',
        created_at: '2017-05-03T17:47:14Z',
        updated_at: '2017-05-03T17:47:15Z',
        pushed_at: '2017-05-03T17:05:53Z',
        git_url: 'git://github.com/michaelmurray6298/fakeQuery.git',
        ssh_url: 'git@github.com:michaelmurray6298/fakeQuery.git',
        clone_url: 'https://github.com/michaelmurray6298/fakeQuery.git',
        svn_url: 'https://github.com/michaelmurray6298/fakeQuery',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'HTML',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 95177186,
        name: 'fs-pet-shop',
        full_name: 'michaelmurray6298/fs-pet-shop',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/fs-pet-shop',
        description: 'A small server app to demonstrate CRUD over an HTTP API',
        fork: true,
        url: 'https://api.github.com/repos/michaelmurray6298/fs-pet-shop',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/fs-pet-shop/deployments',
        created_at: '2017-06-23T02:52:36Z',
        updated_at: '2017-06-23T02:52:37Z',
        pushed_at: '2017-06-01T19:04:26Z',
        git_url: 'git://github.com/michaelmurray6298/fs-pet-shop.git',
        ssh_url: 'git@github.com:michaelmurray6298/fs-pet-shop.git',
        clone_url: 'https://github.com/michaelmurray6298/fs-pet-shop.git',
        svn_url: 'https://github.com/michaelmurray6298/fs-pet-shop',
        homepage: null,
        size: 35,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 85233885,
        name: 'functional-javascript-workshop',
        full_name: 'michaelmurray6298/functional-javascript-workshop',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url:
     'https://github.com/michaelmurray6298/functional-javascript-workshop',
        description:
     'A functional javascript workshop. No libraries required (i.e. no underscore), just ES5.',
        fork: true,
        url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/functional-javascript-workshop/deployments',
        created_at: '2017-03-16T19:25:41Z',
        updated_at: '2017-03-16T19:25:43Z',
        pushed_at: '2016-11-16T04:03:25Z',
        git_url:
     'git://github.com/michaelmurray6298/functional-javascript-workshop.git',
        ssh_url:
     'git@github.com:michaelmurray6298/functional-javascript-workshop.git',
        clone_url:
     'https://github.com/michaelmurray6298/functional-javascript-workshop.git',
        svn_url:
     'https://github.com/michaelmurray6298/functional-javascript-workshop',
        homepage: '',
        size: 325,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 94138163,
        name: 'galvanize-bookshelf',
        full_name: 'michaelmurray6298/galvanize-bookshelf',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/galvanize-bookshelf',
        description: 'Create a web application to manage your book collection',
        fork: true,
        url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-bookshelf/deployments',
        created_at: '2017-06-12T20:36:53Z',
        updated_at: '2017-06-12T20:36:55Z',
        pushed_at: '2017-05-25T16:13:26Z',
        git_url: 'git://github.com/michaelmurray6298/galvanize-bookshelf.git',
        ssh_url: 'git@github.com:michaelmurray6298/galvanize-bookshelf.git',
        clone_url:
     'https://github.com/michaelmurray6298/galvanize-bookshelf.git',
        svn_url: 'https://github.com/michaelmurray6298/galvanize-bookshelf',
        homepage: '',
        size: 11712,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 89949210,
        name: 'galvanize-delivers',
        full_name: 'michaelmurray6298/galvanize-delivers',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/galvanize-delivers',
        description: 'Create a website for a fine dining delivery service',
        fork: true,
        url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/galvanize-delivers/deployments',
        created_at: '2017-05-01T18:09:47Z',
        updated_at: '2017-05-01T18:09:49Z',
        pushed_at: '2017-05-30T06:12:38Z',
        git_url: 'git://github.com/michaelmurray6298/galvanize-delivers.git',
        ssh_url: 'git@github.com:michaelmurray6298/galvanize-delivers.git',
        clone_url:
     'https://github.com/michaelmurray6298/galvanize-delivers.git',
        svn_url: 'https://github.com/michaelmurray6298/galvanize-delivers',
        homepage: '',
        size: 17610,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 88667833,
        name: 'git-crash-course',
        full_name: 'michaelmurray6298/git-crash-course',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/git-crash-course',
        description: null,
        fork: true,
        url: 'https://api.github.com/repos/michaelmurray6298/git-crash-course',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/git-crash-course/deployments',
        created_at: '2017-04-18T20:30:35Z',
        updated_at: '2017-04-18T20:16:47Z',
        pushed_at: '2017-04-18T20:15:33Z',
        git_url: 'git://github.com/michaelmurray6298/git-crash-course.git',
        ssh_url: 'git@github.com:michaelmurray6298/git-crash-course.git',
        clone_url: 'https://github.com/michaelmurray6298/git-crash-course.git',
        svn_url: 'https://github.com/michaelmurray6298/git-crash-course',
        homepage: null,
        size: 0,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 98912058,
        name: 'github-api',
        full_name: 'michaelmurray6298/github-api',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/github-api',
        description: null,
        fork: true,
        url: 'https://api.github.com/repos/michaelmurray6298/github-api',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/github-api/deployments',
        created_at: '2017-07-31T17:24:04Z',
        updated_at: '2017-07-31T21:56:25Z',
        pushed_at: '2017-08-03T01:41:42Z',
        git_url: 'git://github.com/michaelmurray6298/github-api.git',
        ssh_url: 'git@github.com:michaelmurray6298/github-api.git',
        clone_url: 'https://github.com/michaelmurray6298/github-api.git',
        svn_url: 'https://github.com/michaelmurray6298/github-api',
        homepage: null,
        size: 147,
        stargazers_count: 1,
        watchers_count: 1,
        language: 'Shell',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 94116775,
        name: 'git_practice',
        full_name: 'michaelmurray6298/git_practice',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/git_practice',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/michaelmurray6298/git_practice',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/git_practice/deployments',
        created_at: '2017-06-12T16:20:07Z',
        updated_at: '2017-06-12T16:20:07Z',
        pushed_at: '2017-06-12T16:56:44Z',
        git_url: 'git://github.com/michaelmurray6298/git_practice.git',
        ssh_url: 'git@github.com:michaelmurray6298/git_practice.git',
        clone_url: 'https://github.com/michaelmurray6298/git_practice.git',
        svn_url: 'https://github.com/michaelmurray6298/git_practice',
        homepage: null,
        size: 1,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 89722804,
        name: 'issues',
        full_name: 'michaelmurray6298/issues',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/issues',
        description: null,
        fork: true,
        url: 'https://api.github.com/repos/michaelmurray6298/issues',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/issues/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/issues/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/issues/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/issues/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/issues/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/issues/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/issues/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/issues/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/issues/branches{/branch}',
        tags_url: 'https://api.github.com/repos/michaelmurray6298/issues/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/issues/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/issues/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/issues/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/issues/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/issues/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/issues/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/issues/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/issues/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/issues/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/issues/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/issues/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/issues/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/issues/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/issues/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/issues/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/issues/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/issues/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/issues/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/issues/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/issues/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/issues/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/issues/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/issues/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/issues/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/issues/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/issues/deployments',
        created_at: '2017-04-28T16:08:06Z',
        updated_at: '2017-04-28T16:08:07Z',
        pushed_at: '2017-04-28T15:38:06Z',
        git_url: 'git://github.com/michaelmurray6298/issues.git',
        ssh_url: 'git@github.com:michaelmurray6298/issues.git',
        clone_url: 'https://github.com/michaelmurray6298/issues.git',
        svn_url: 'https://github.com/michaelmurray6298/issues',
        homepage: null,
        size: 16,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 90408338,
        name: 'jquery-calculator',
        full_name: 'michaelmurray6298/jquery-calculator',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/jquery-calculator',
        description: 'Use jQuery to build a basic calculator',
        fork: true,
        url: 'https://api.github.com/repos/michaelmurray6298/jquery-calculator',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/jquery-calculator/deployments',
        created_at: '2017-05-05T19:07:44Z',
        updated_at: '2017-05-05T19:07:45Z',
        pushed_at: '2017-05-30T06:16:17Z',
        git_url: 'git://github.com/michaelmurray6298/jquery-calculator.git',
        ssh_url: 'git@github.com:michaelmurray6298/jquery-calculator.git',
        clone_url: 'https://github.com/michaelmurray6298/jquery-calculator.git',
        svn_url: 'https://github.com/michaelmurray6298/jquery-calculator',
        homepage: '',
        size: 262,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'CSS',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 91378486,
        name: 'lt-ski',
        full_name: 'michaelmurray6298/lt-ski',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/lt-ski',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/michaelmurray6298/lt-ski',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/branches{/branch}',
        tags_url: 'https://api.github.com/repos/michaelmurray6298/lt-ski/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/lt-ski/deployments',
        created_at: '2017-05-15T19:50:27Z',
        updated_at: '2017-05-15T19:54:51Z',
        pushed_at: '2017-05-19T18:37:04Z',
        git_url: 'git://github.com/michaelmurray6298/lt-ski.git',
        ssh_url: 'git@github.com:michaelmurray6298/lt-ski.git',
        clone_url: 'https://github.com/michaelmurray6298/lt-ski.git',
        svn_url: 'https://github.com/michaelmurray6298/lt-ski',
        homepage: null,
        size: 17968,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 89929406,
        name: 'pixel-art-maker',
        full_name: 'michaelmurray6298/pixel-art-maker',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/pixel-art-maker',
        description: 'Create your own pixel art maker',
        fork: true,
        url: 'https://api.github.com/repos/michaelmurray6298/pixel-art-maker',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/pixel-art-maker/deployments',
        created_at: '2017-05-01T14:10:49Z',
        updated_at: '2017-05-01T17:04:32Z',
        pushed_at: '2017-05-01T17:04:31Z',
        git_url: 'git://github.com/michaelmurray6298/pixel-art-maker.git',
        ssh_url: 'git@github.com:michaelmurray6298/pixel-art-maker.git',
        clone_url: 'https://github.com/michaelmurray6298/pixel-art-maker.git',
        svn_url: 'https://github.com/michaelmurray6298/pixel-art-maker',
        homepage: '',
        size: 91,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'HTML',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 97292532,
        name: 'react-inbox',
        full_name: 'michaelmurray6298/react-inbox',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/react-inbox',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/michaelmurray6298/react-inbox',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/react-inbox/deployments',
        created_at: '2017-07-15T04:40:38Z',
        updated_at: '2017-07-17T23:57:59Z',
        pushed_at: '2017-08-02T22:09:22Z',
        git_url: 'git://github.com/michaelmurray6298/react-inbox.git',
        ssh_url: 'git@github.com:michaelmurray6298/react-inbox.git',
        clone_url: 'https://github.com/michaelmurray6298/react-inbox.git',
        svn_url: 'https://github.com/michaelmurray6298/react-inbox',
        homepage: null,
        size: 229,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 1,
        mirror_url: null,
        open_issues_count: 2,
        forks: 1,
        open_issues: 2,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 89750794,
        name: 'stoplight-event-exercise',
        full_name: 'michaelmurray6298/stoplight-event-exercise',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url:
     'https://github.com/michaelmurray6298/stoplight-event-exercise',
        description:
     'Practice listening for and handling JavaScript DOM Events',
        fork: true,
        url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/stoplight-event-exercise/deployments',
        created_at: '2017-04-28T23:03:00Z',
        updated_at: '2017-04-28T23:03:01Z',
        pushed_at: '2017-03-01T01:26:32Z',
        git_url:
     'git://github.com/michaelmurray6298/stoplight-event-exercise.git',
        ssh_url:
     'git@github.com:michaelmurray6298/stoplight-event-exercise.git',
        clone_url:
     'https://github.com/michaelmurray6298/stoplight-event-exercise.git',
        svn_url:
     'https://github.com/michaelmurray6298/stoplight-event-exercise',
        homepage: '',
        size: 1935,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'CSS',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 94135486,
        name: 'time-comp',
        full_name: 'michaelmurray6298/time-comp',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/time-comp',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/michaelmurray6298/time-comp',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/time-comp/deployments',
        created_at: '2017-06-12T20:02:25Z',
        updated_at: '2017-06-12T20:04:31Z',
        pushed_at: '2017-06-12T20:32:44Z',
        git_url: 'git://github.com/michaelmurray6298/time-comp.git',
        ssh_url: 'git@github.com:michaelmurray6298/time-comp.git',
        clone_url: 'https://github.com/michaelmurray6298/time-comp.git',
        svn_url: 'https://github.com/michaelmurray6298/time-comp',
        homepage: null,
        size: 635,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 89261200,
        name: 'warmups',
        full_name: 'michaelmurray6298/warmups',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/warmups',
        description: null,
        fork: true,
        url: 'https://api.github.com/repos/michaelmurray6298/warmups',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/branches{/branch}',
        tags_url: 'https://api.github.com/repos/michaelmurray6298/warmups/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/warmups/deployments',
        created_at: '2017-04-24T16:09:03Z',
        updated_at: '2017-04-27T19:32:45Z',
        pushed_at: '2017-04-21T21:56:01Z',
        git_url: 'git://github.com/michaelmurray6298/warmups.git',
        ssh_url: 'git@github.com:michaelmurray6298/warmups.git',
        clone_url: 'https://github.com/michaelmurray6298/warmups.git',
        svn_url: 'https://github.com/michaelmurray6298/warmups',
        homepage: '',
        size: 446,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
      {
        id: 91016489,
        name: 'wd-ajax-hero',
        full_name: 'michaelmurray6298/wd-ajax-hero',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/wd-ajax-hero',
        description: 'Making Ajax calls to the OMDb API and update the DOM',
        fork: true,
        url: 'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/wd-ajax-hero/deployments',
        created_at: '2017-05-11T19:35:05Z',
        updated_at: '2017-05-11T19:35:06Z',
        pushed_at: '2016-11-30T18:08:27Z',
        git_url: 'git://github.com/michaelmurray6298/wd-ajax-hero.git',
        ssh_url: 'git@github.com:michaelmurray6298/wd-ajax-hero.git',
        clone_url: 'https://github.com/michaelmurray6298/wd-ajax-hero.git',
        svn_url: 'https://github.com/michaelmurray6298/wd-ajax-hero',
        homepage: '',
        size: 14501,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: {
          admin: true,
          push: true,
          pull: true,
        },
      },
    ];
    const userFetch = {
      login: 'michaelmurray6298',
      id: 24865792,
      avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/michaelmurray6298',
      html_url: 'https://github.com/michaelmurray6298',
      followers_url: 'https://api.github.com/users/michaelmurray6298/followers',
      following_url:
    'https://api.github.com/users/michaelmurray6298/following{/other_user}',
      gists_url:
    'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
      starred_url:
    'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
      subscriptions_url:
    'https://api.github.com/users/michaelmurray6298/subscriptions',
      organizations_url: 'https://api.github.com/users/michaelmurray6298/orgs',
      repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
      events_url:
    'https://api.github.com/users/michaelmurray6298/events{/privacy}',
      received_events_url:
    'https://api.github.com/users/michaelmurray6298/received_events',
      type: 'User',
      site_admin: false,
      name: 'Michael Murray',
      company: null,
      blog: '',
      location: null,
      email: 'michaelmurray6298@gmail.com',
      hireable: null,
      bio: null,
      public_repos: 20,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: '2017-01-01T19:17:16Z',
      updated_at: '2017-07-27T16:44:43Z',
      private_gists: 0,
      total_private_repos: 28,
      owned_private_repos: 0,
      disk_usage: 18833,
      collaborators: 0,
      two_factor_authentication: false,
      plan: {
        name: 'free',
        space: 976562499,
        collaborators: 0,
        private_repos: 0,
      },
    };
    nock('https://api.github.com')
      .get(`/users/michaelmurray6298?access_token=${process.env.TKN}`)
      .reply(200, userFetch);
    nock('https://api.github.com')
      .get(`/users/michaelmurray6298/repos?access_token=${process.env.TKN}`)
      .reply(200, repoFetch);
    const userRepo = await user.userRepos;
    expect(userRepo[0].repo.id).to.equal(repoFetch[0].id);
  });
});
